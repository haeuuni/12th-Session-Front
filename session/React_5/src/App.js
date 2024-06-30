import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 예제 (LOGIN-SUCCESSFUL)
  const onLogin = () => {};

  // 쿠키 삭제
  const deleteCookie = () => {};

  // 로컬스토리지 삭제
  const deleteLS = () => {};

  return (
    <>
      <h1>POST</h1>
      {/* POST 로그인 예제 */}
      <h3>로그인</h3>
      <div>
        <input
          type="email"
          placeholder="email을 입력하세요"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <input type="button" value="로그인" />
      <br />
      <br />

      <button onClick={deleteCookie}>쿠키 삭제하기</button>
      <br />
      <button onClick={deleteLS}>로컬스토리지 삭제하기</button>
    </>
  );
}

export default App;
