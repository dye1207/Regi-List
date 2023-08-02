import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteRegi, getRegiList, registRegi, updateRegi } from "../services/regi.service";

function RegiList() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [regiList, setRegiList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  function getRegis() {
    getRegiList()
      .then((res) => {
        setRegiList(res.data);
        console.log('res.data: ', res.data);
        setErrorMessage('');
      })
      .catch(() => {
        setErrorMessage("Json-Server 켰나요? 확인해보세요.");
      });
  }

  useEffect(() => {
    getRegis();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const newRegi = {
      name: name,
      age: age,
      address: address,
      checked: false, // Assuming a new registration should have a "checked" value of false
    };
    console.log('newRegi: ', newRegi);
    registRegi(newRegi)
      .then((res) => {
        toast.warn("등록 완료");
        getRegis();
        setName("");
        setAge("");
        setAddress("");
      })
      .catch((error) => {
        // Handle error here if needed
      });
  }

  function onDelete(id) {
    deleteRegi(id).then(() => getRegis());
  }

  function handleCheck(event, id, content) {
    const params = { checked: event.target.checked, content: content };
    updateRegi(id, params).then(() => getRegis());
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="justify-content-between">
          <div>
            <input
              onChange={(event) => setName(event.target.value)}
              value={name}
              className="form-control"
              placeholder="이름을 입력하세요"
            /><br />

            <input
              onChange={(event) => setAge(event.target.value)}
              value={age}
              className="form-control"
              placeholder="나이를 입력하세요."
            /><br />

            <input
              onChange={(event) => setAddress(event.target.value)}
              value={address}
              className="form-control"
              placeholder="주소를 입력하세요."
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary ms-3">
            등록
          </button>
        </div>
      </form>
      <hr />
      <div>
                    <h3>현재 가입된 목록</h3>
                </div>
      {errorMessage ? (
        <div className="text-danger h4 text-center">{errorMessage}</div>
      ) : (
        <div>
            
          <table className="table table-striped">
            <thead>
              <tr>
                <th>이름</th>
                <th>나이</th>
                <th>주소</th>
                <th>수정</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
 
              {regiList.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link
                      to={`/regi/modify/${item.id}`}
                      state={{
                        id: item.id,
                        content: item.content,
                        age: item.age,
                        address: item.address,
                        checked: item.checked,
                      }}
                      className="btn btn-success"
                    >
                      수정
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="btn btn-danger"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RegiList;
