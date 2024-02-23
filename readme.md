# 스터디 참조

### 인터넷 강의
##### * Next + React Query로 SNS 서비스 만들기 - https://www.inflearn.com/course/next-react-query-sns%EC%84%9C%EB%B9%84%EC%8A%A4#
##### * 강의 교본 - https://github.com/ZeroCho/next-app-router-z/tree/master

### 문서
##### * 리액트 한글 문서 - https://react-ko.dev/

### 블로그 
##### * React Key - https://velog.io/@ssoon-m/react-key-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EB%8B%A4%EB%A3%A8%EA%B8%B0
##### * 리액트 랜더링 및 최적화 - https://www.nextree.io/riaegteu-rendeoring-mic-coejeoghwa/
##### * 벨로퍼트와 함께하는 모던 리액트 - https://react.vlpt.us/

### 영상
##### * 벨로퍼트와 함께하는 모던 리액트 - https://youtu.be/HHKV9XbXUOw?si=-8fnEYhdrl9RnuxH

<br /><br />

# 강의 내용 및 복습 필요한 내용

## 2/21 ~ 2/28
### useRef
#####   * 특정한 DOM요소에 접근이 가능하면, 불필요한 재렌더링을 하지 않는다
  #### useRef 생성
  ``` JSX
  const 변수명 = useRef(초기값) // {current:  초기값}  을 지닌 객체가 반환
  ```
#####   * current라는 키값을 지닌 프로퍼티가 생성되고, 값에 어떤 변경을 줄때도 이 current를 이용해서 변경 한다
  #### useRef 사용
  ``` JSX
  <input ref= {변수명}/>
  ```
#####   * ref는 state와 비슷하게 어떤 값을 저장하는 저장공간으로 사용
#####     * State의 변화 ➡️ 렌더링 됨 ➡️ 컴포넌트 내부 변수들 초기화
#####     * State의 변화 ➡️ 렌더링 됨 ➡️ 그래도 Ref의 값은 유지
#####     * Ref의 변화 ➡️ 렌더링 안됨 ➡️ 변수들의 값이 유지
#####   * 변경시 렌더링을 발생시키지 말아야하는 값을 다룰때 사용 (변화는 감지해야하지만, 그 변화가 렌더링을 발생시키면 안될때)

#### useRef 특징
#####   * 반환된 useRef 객체는 컴포넌트의 전생애주기를 통해 유지
#####     * 컴포넌트가 계속해서 렌더링이 되어도 컴포넌트가 언마운드되기 전까지는 값을 그대로 유지
#####     * currnet 속성은 값을 변경해도 상태를 변경할 때 처럼 React 컴포넌트가 재렌더링 안됨
#####     * 렌더링과 상관없이, 마운트된 시점부터 언마운트된 시점까지 값을 유지

#### useRef 요약
  ```ts
  //생성 
  const 변수명 = useRef(초기값)
  // {current: 초기값} 을 지닌 객체가 반환됨 

  //반환요소에 접근
  <input ref={변수명}/>
  ```
##### * 변화는 감지하지만 렌더링 발생 X ➡️  성능향상 (state는 변화시, 재렌더링됨)
##### * DOM요소에 손쉽게 접근 (ref속성 사용)
##### * 생명주기를 통해 유지 (언마운트 되기전까지는 값을 계속 기억함)

  

### ChangeEventHandler
### FormEventHandler
### provider
### Context API

### Day.js

##### * dayjs .fromNow 사용하게 해주는 플러그인 - https://day.js.org/docs/en/plugin/relative-time
``` JSX
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

dayjs(/* 타겟날짜 */).fromNow(true)

// 타겟날짜부터 지금까지의 상대 시간을 반환
// ex) 몇 초, 몇 분, 몇 시간, 
```

##### * dayjs/locale/ko - https://day.js.org/docs/en/durations/locale#docsNav
``` JSX
// This requires the RelativeTime plugin to work
require('dayjs/locale/es')

dayjs.duration(1, "minutes").locale("en").humanize(); // a minute
dayjs.duration(1, "minutes").locale("es").humanize(); // un minuto

// locale 을 사용하여 지역을 설정하거나 가져 올 수 있음
```


### TTFB, FP, FCP
* TTFB(Time to First Byte) - HTTP 요청을 보낼 경우, 서버에서부터 첫번째 Byte (정보) 가 오기까지 걸리는 시간
* FP (First Paint) - 첫번째 픽셀 이 스크린에 Paint 되었을 때의 시간을 의미한다.
* FCP (First Contentful Paint) - DOM에 속한 컨텐츠의 일부가 스크린에 Paint 되었을 때의 시간을 의미한다.
* FP, FCP의 사용 목적은 얼마나 빨리 화면이 렌더링 되는지를 측정, Chrome의 timing API로 추적이 가능

### SSG (Static Site Generator)
* SSR 처럼 서버로부터 렌더링된 HTML을 받아 오지만, HTML의 생성 시점이 빌드 타임이라는 것이 SSR과의 차이점
* SSR의 경우 요청이 들어오면 그때마다 필요한 HTML을 렌더링해야 하지만, SSG의 경우 HTML을 사전에 빌드 타임에서 생성 하였으므로 이를 전송만 하면 됨
* 정적 페이지를 제공하는 것은 아니라 빌드 타임에 생성된 HTML 파일이 정적이라는 의미. FCP 이후 JS 파일을 받아 인터렉션을 제공 가능함
* React로 개발된 애플리케이션을 Gatsby 라이브러리를 통해 빌드하여 정적인 사이트들로 변환 시켜 줌

### SSG (Static Site Generator) 동작 과정
* 사용자가 웹 페이지를 방문할 경우, *엣지 캐싱된 HTML 파일을 클라이언트로 반환 함
* 브라우저는 HTML을 받고 이를 띄워 사용자가 사이트를 볼 수 있도록 함
> 엣지 캐싱 (Edge Caching)  
> 클라이언트의 컴퓨터에 최대한 가깝게 (물리적인 거리) 콘텐츠를 저장하여 대기 시간을 줄이기 위해 캐싱 서버를 사용하는 것. 주로 CDN 전략을 많이 사용

### Universal Rendering
* SSR을 통해 초기에 빠른 FCP를 구현한 이후, 클라이언트 단위에서 hydration 기법을 통해 JS 파일을 적용하여 인터렉션을 가능하게끔 하는 방식.
* 초기 로딩 시에는 SSR처럼 작동하고, 이후에는 CSR로 작동하는 방식이며 Next.js, Nuxt.js 와 같은 프레임워크를 사용

### Universal Rendering 동작 과정
1. 사용자가 웹 페이지를 방문할 경우, 서버는 이를 확인하고 브라우저에게 제공할 HTML 컨텐츠를 컴파일
2. 컴파일 된 HTML은 브라우저에 제공, 브라우저는 이를 다운로드하고 렌더링하여 사용자가 이를 볼 수 있도록 함
3. 이후 JS 파일을 다운로드 받은 후 실행하여 사용자와 페이지 간의 인터렉션을 가능하게 함
4. 사용자가 다른 페이지로 이동을 진행할 경우, 다운로드 받은 JS 파일을 활용하여 렌더링 (CSR) 을 진행

#### No Pre-rendering(Plain React.js app)
* CSR 기법을 사용하는 React의 경우, 초기 로딩 시에는 텅 빈 화면을 보여주고 렌더링 과정에서 HTML을 구축하고 번들링된 JS 코드를 적용.

#### Pre-rendering(Using Next.js)
* Universal Rendering의 경우 서버에서 사전에 필요한 HTML을 렌더링하고, 이후 클라이언트에서 번들링된 JS 코드를 적용.

### Hydration
JS 코드 내의 "이벤트 핸들러" 함수들을 정적인 DOM 노드들에 붙여서 동적으로 상호작용이 가능하도록 바꾸어주는 기능.  
즉, 사용자가 단순히 웹 사이트의 화면을 보는 것이 아니라 실질적인 상호작용을 가능하게끔 하는 과정.  

새롭게 요소를 만드느냐 vs 원래 있던 요소를 찾아 js만 적용하느냐  

* 컴포넌트를 렌더링하고 이벤트 핸들러를 연결하는 프로세스를 Hydration이라고 함.
* 인터랙션 기능 및 이벤트 핸들러를 이용해 HTML동작하게 해주는 것.
* Hydration 후 애플리케이션은 인터랙티브하게 클릭 등 사용자 입력에 응답함.
* TTV (Time to View) → Hydrate → TTI (Time to Interact)
  * TTV (Time to View) - 사용자가 어플리케이션 화면을 **보기**까지 걸리는 시간
  * TTI (Time to Interact) - 사용자가 어플리케이션 화면과 **상호작용** 하기까지 걸리는 시간
* TTV가 빠르면 화면이 빨리 보임, TTI가 빠르다면 웹을 빨리 사용

#### render()
``` JSX
ReactDOM.render(element, container[, callback])
```
  * `ReactDOM.render()` 함수는 두번째 파라미터인 지정된 DOM 요소에 하위로 추가하여 렌더링. 
  * 렌더링이 완료되면 특정 이벤트를 처리할 콜백함수를 세번째 인자로 넣어줌.

#### hydrate()
  * `ReactDOM.hydrate()` 함수는 특정 컴포넌트를 두번째 파라미터인 지정된 DOM 요소에 하위로 Hydrate.
  * 렌더링을 통해 새로운 웹페이지를 구성하는 것이 아니라 기존 DOM Tree에서 해당되는 DOM 요소를 찾아 정해진 자바스크립트 속성들만 적용.


## Error
```plaintext
Error: Text content does not match server-rendered html.
```
* Nextjs의 렌더링 기법에 의해 업데이트되었지만, React에서 페이지가 로드된 후 hydrate된 코드들은 업데이트되지 않았을 때 생김

```plaintext
Error: There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.
```
* App 디렉터리를 사용하는 경우 루트 구성 요소에서 `<head>`태그를 사용할 때 다음 오류가 발생할 수 있dma
* `<head>`는 Next.js가 하이드레이션 중에 페이지의 HTML 태그에 메타데이터 삽입을 제어하기 때문에 발생
* Next.js 에서 제공하는 헤드가 아닌 커스텀 `<head>` 컴포넌트를 사용하여 오류 해결 가능

```plaintext
Error: Hydration failed because the initial UI does not match what was rendered on the server.
```

* 하나의 함수를 서버에서도 한 번, 클라이언트에서도 한 번 실행하게 되면 함수 실행 결과가 랜덤이라 매 번 값이 달라지니 자연히 "서버와 클라이언트의 text content가 같지 않다"는 오류가 발생. 
* 클라이언트단 작업을 위해 '임시'로 랜덤한 데이터를 내려주기로 한 것 때문에 생기는 오류라 랜덤 함수를 없애면 해결 됨.


