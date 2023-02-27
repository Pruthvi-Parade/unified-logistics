import "./App.css";
import { Outlet, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Spin } from "antd";
import Login from "./Authorization/Login";
import Homepage from "./AppLayout/Homepage";
import { useEffect, useState } from "react";
import AllOrders from "./Masters/AllFiles/Allorders"
import Dispatch from "./Masters/AllFiles/Dispatch";
import Pending from "./Masters/AllFiles/Pending";
import Delivered from "./Masters/AllFiles/Delivered";
import MySearchComponent from "./AppLayout/MySearchComponent";
import Dashboard from "./Masters/Dashboard/dashboard";
import Inventory_Excel from "./Masters/Dashboard/Inventoryexcel";
import Liveshipmentinbond from "./Masters/Dashboard/Liveshipmentinbond";
import Mappingcount from "./Masters/Dashboard/Mappingcount";
import Shipnow from "./Masters/Dashboard/Shipnow";
import Payment from "./Masters/Dashboard/Payment"
function App() {
    let location = useLocation();

    var [loading, setLoading] = useState(true);
    var [isverified, setIsVerified] = useState(true);

    function validateLogin() {
        setLoading(true);
        if (localStorage.getItem("isLoggedIn")) {
            setIsVerified(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        validateLogin();
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route
                    path="*"
                    element={
                        loading ? (
                            <div
                                className="App"
                                style={{ textAlign: "center" }}
                            >
                                <Spin
                                    size="large"
                                    style={{ marginTop: "50px" }}
                                />
                            </div>
                        ) : isverified ? (
                            <>
                                <Homepage />
                                <MySearchComponent />
                            </>
                        ) : (
                            <Navigate
                                to="/login"
                                replace={true}
                                state={{
                                    from: location.pathname + location.search,
                                }}
                            />
                        )
                    }
                >
                    <Route path="masters" element={<Outlet />}>
                        <Route path="allfiles" element={<Outlet />}>
                            <Route path="allorders" element={<AllOrders />}/>
                            <Route path="pending" element={<Pending />} />
                            <Route path="delivered" element={<Delivered />} />
                            <Route path="dispatch" element={<Dispatch />} />
                        </Route>
                        <Route path="dashboard" element={<Outlet />}>
                            <Route 
                                path="dashboard" 
                                element={<Dashboard />} 
                            />
                            <Route
                                path="inventoryexcel"
                                element={<Inventory_Excel />}
                            />
                            <Route
                                path="liveshipmentinbond"
                                element={<Liveshipmentinbond />}
                            />
                            <Route
                                path="mappingcount"
                                element={<Mappingcount />}
                            />
                             <Route
                                path="shipnow"
                                element={<Shipnow />}
                            />
                            <Route
                                path="payments"
                                element={<Payment />}
                            />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
