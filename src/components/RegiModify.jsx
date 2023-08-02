import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { hostUrl } from "../environment/environment";

function RegiModify() {
  const navigate = useNavigate();
  const location = useLocation();
  const [beforeName, setBeforeName] = useState(location.state.name);
  const [beforeAge, setBeforeAge] = useState(location.state.age);
  const [beforeAddress, setBeforeAddress] = useState(location.state.address);
  const [beforeState, setBeforeState] = useState(location.state.checked);

  function onUpdate() {
    axios
      .put(`${hostUrl}/regis/` + location.state.id, {
        name: beforeName,
        age: beforeAge,
        address: beforeAddress,
        checked: beforeState,
      })
      .then(() => {
        navigate("/regi");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h4>Update Page</h4>
      <hr />
      <div className="mt-2">
        <input
          onChange={(event) => setBeforeName(event.target.value)}
          className="form-control"
          value={beforeName}
          placeholder="이름을 입력하세요"
        />
      </div>
      <div className="mt-2">
        <input
          onChange={(event) => setBeforeAge(event.target.value)}
          className="form-control"
          value={beforeAge}
          placeholder="나이를 입력하세요"
        />
      </div>
      <div className="mt-2">
        <input
          onChange={(event) => setBeforeAddress(event.target.value)}
          className="form-control"
          value={beforeAddress}
          placeholder="주소를 입력하세요"
        />
      </div>
      <div className="mt-2">
        <input
          onChange={(event) => setBeforeState(event.target.checked)}
          className="form-check-input"
          type="checkbox"
          checked={beforeState}
        />
        <label className="form-check-label ms-2">완료</label>
      </div>
      <div className="mt-2">
        <button onClick={onUpdate} className="btn btn-success">
          수정
        </button>
        <button onClick={() => navigate("/regi")} className="btn btn-danger ms-2">
          취소
        </button>
      </div>
    </div>
  );
}

export default RegiModify;
