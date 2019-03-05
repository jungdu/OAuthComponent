# OAuth Button

Redux에서 인증정보를 관리할 수 있는 React 컴포넌트.

## 실행 환경 설정
* 구글 APIS 페이지에 접속하여 사용자 인증 정보 생성
* 생성한 사용자 인증 정보의 클라이언트 ID 적용하기 위해 아래의 파일 생성


src/config.js
```
export default clientId = "< 구글 api Cliend ID >"
```

## 로그인 과정
1) 컴포넌트 마운트
2) 인증에 필요한 gapi 로드, 초기화
3) gapi 로부터 인증 정보 조회
4) 조회된 인증 정보로 Action( SignIn / SignOut ) 호출
5) reducer에 인증 정보 반영

## gapi
* 헤더에 아래의 태그를 추가 하면 gapi를 사용할 수 있다.
```
<script src="https://apis.google.com/js/api.js"></script>
```
* 로그인 창 팝업 <br> gapi.auth2.getAuthInstance().signIn() 
* 로그 아웃 <br> gapi.auth2.getAuthInstance().signOut()
* 사용자 로그인 여부 조회 <br> gapi.auth2.getAuthInstance().isSignedIn.get()
* 현재 사용자 정보 조회 <br> gapi.auth2.getAuthInstance().currentUser
* 현재 사용자 ID 조회 <br> gapi.auth2.getAuthInstance().currentUser.get().getId()
