import { Form, Input, Button, Typography, message, Card } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
// import "antd/dist/antd.css";
import axios from "axios";
import userData from './users.json'
const { Title } = Typography;

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onFinish = async (values) => {

    for (let i = 0; i < userData.length; i++) {
      if (values.username == "admin" && values.password == "admin" ||
          values.username == "pruthvi" && values.password == "pruthvi" ||
          values.username == "ajinkya" && values.password == "mane" ||
          values.username == "abhishek" && values.password == "abhishek"
          ) {
        console.log("yesss");
        navigate(`/masters/dashboard/dashboard`);
      }
      else
        continue;
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>

      <div className="login">
        <div className="appAside">
          {/* <img src="loginpage.jpg" height="50%" width="50%"></img> */}
        </div>

        {/* <div className="appForm"> */}
        <div
          style={{
            height: "100vh",
            backgroundImage: `url("/LoginPage.png")`,
            backgroundColor: "white",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              minWidth: "100%",
              minHeight: "100%",
              textAlign: "center",
              display: "-webkit-flex",
              alignItems: "center",
            }}
          >
            <Card
              bordered={true}
              hoverable={true}
              style={{
                margin: "Auto",
                width: "400px",
                borderRadius: "3%",
              }}
            >
              <br></br>
              <img
                src="./Routelogo.png"
                style={{ width: "180px", margin: "5%" }}
              />
              <Title style={{ color: "black" }}>ULI Login</Title>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  style={{ color: "black" }}
                  label={
                    <p
                      style={{
                        fontSize: "20px",
                        color: "black",
                        marginTop: "18px",
                      }}
                    >
                      Username
                    </p>
                  }
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  label={
                    <p
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginTop: "18px",
                      }}
                    >
                      Password
                    </p>
                  }
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password size="large" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ width: "150%" }}
                  >
                    Submit
                  </Button>
                  <div style={{marginLeft:"30px",marginTop:"10px"}}> <Title level={5}>Version:{process.env.REACT_APP_VERSION}</Title></div>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
