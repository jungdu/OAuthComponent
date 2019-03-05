# OAuth Button

Redux에서 인증정보를 관리할 수 있는 React 컴포넌트.

## 로그인 과정
1) 컴포넌트 마운트
2) 인증에 필요한 gapi 로드, 초기화
3) gapi 로부터 인증 정보 조회
4) 조회된 인증 정보로 Action( SignIn / SignOut ) 호출
5) reducer에 인증 정보 반영