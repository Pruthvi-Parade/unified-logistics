import { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Modal, Input, Divider, Button, Form } from "antd";
import { useNavigate } from "react-router-dom";

function MySearchComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchInput = useRef(null);

  useEffect(() => {
    if (searchInput.current && isModalOpen) {
      searchInput.current.focus();
    }
  }, [isModalOpen]);

  const [searchItem, setSearchItem] = useState("");

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setIsModalOpen(true);
      }
    });
  });

  const navigate = useNavigate();

  const searchList = [
    {
        name: "Dispatch",
        navigate: "/masters/allfiles/dispatch",
        search: "dispatch"
    },
    {
        name: "Dumpfile",
        navigate: "/masters/allfiles/dumpfile",
        search: "dumpfile"
    },
    {
        name: "filetable",
        navigate: "/masters/allfiles/filetable",
        search: "filetable"
    },
    {
        name: "locate",
        navigate: "/masters/allfiles/locate",
        search: "locate"
    }
  ]
  return (
    <div className="App">
          <Form>
            <Modal
              title="Search Here"
              open={isModalOpen}
              closable={false}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Input
                size="large"
                placeholder="Search Here"
                prefix={<SearchOutlined />}
                ref={searchInput}
                autoFocus
                onChange={(e) => {
                  setSearchItem(e.target.value);
                }}
              />
              <div
                className="Results"
                style={{ height: "200px", overflow: "auto", marginTop: "2%" }}
              >
                <ul style={{ marginRight: "10%" }}>
                  {searchList.filter((value) => {
                    if (searchItem == "") {
                      return value;
                    } else if (
                      value.name
                        .toLocaleLowerCase()
                        .includes(searchItem.toLowerCase())
                    ) {
                      return value;
                    }
                  }).map((val, key) => {
                    return (
                      <div className="user" key={key}>
                        <Divider />
                        <li style={{ listStyleType: "none" }}>
                        <Button 
                          style={{ width: "100%" }}
                              onClick={
                                () => {
                                  navigate(val.navigate)
                                }
                              }
                          >
                            {val.name}
                          </Button>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </Modal>
          </Form>
    </div>
  );
}

export default MySearchComponent;
