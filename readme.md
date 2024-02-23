스터디 참조
------

### 인터넷 강의
* Next + React Query로 SNS 서비스 만들기 - https://www.inflearn.com/course/next-react-query-sns%EC%84%9C%EB%B9%84%EC%8A%A4#
* 강의 교본 - https://github.com/ZeroCho/next-app-router-z/tree/master


### 문서
* 리액트 한글 문서 - https://react-ko.dev/


### 블로그 
* React Key - https://velog.io/@ssoon-m/react-key-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EB%8B%A4%EB%A3%A8%EA%B8%B0
* 리액트 랜더링 및 최적화 - https://www.nextree.io/riaegteu-rendeoring-mic-coejeoghwa/
* 벨로퍼트와 함께하는 모던 리액트 - https://react.vlpt.us/


### 영상
* 벨로퍼트와 함께하는 모던 리액트 - https://youtu.be/HHKV9XbXUOw?si=-8fnEYhdrl9RnuxH

<br /><br />
  

강의 내용 및 복습 필요한 내용
------

### 2/21 ~ 2/28
### useRef
특정한 DOM요소에 접근이 가능하면, 불필요한 재렌더링을 하지 않는다

 
#### useRef 생성
``` typescript
const 변수명 = useRef(초기값) // {current:  초기값}  을 지닌 객체가 반환
```
* current라는 키값을 지닌 프로퍼티가 생성되고, 값에 어떤 변경을 줄때도 이 current를 이용해서 변경 한다


#### useRef 사용
``` typescript
<input ref= {변수명}/>
```
* ref는 state와 비슷하게 어떤 값을 저장하는 저장공간으로 사용
  * State의 변화 ➡️ 렌더링 됨 ➡️ 컴포넌트 내부 변수들 초기화
  * State의 변화 ➡️ 렌더링 됨 ➡️ 그래도 Ref의 값은 유지
  * Ref의 변화 ➡️ 렌더링 안됨 ➡️ 변수들의 값이 유지
* 변경시 렌더링을 발생시키지 말아야하는 값을 다룰때 사용 (변화는 감지해야하지만, 그 변화가 렌더링을 발생시키면 안될때)


#### useRef 특징
* 반환된 useRef 객체는 컴포넌트의 전생애주기를 통해 유지
  * 컴포넌트가 계속해서 렌더링이 되어도 컴포넌트가 언마운드되기 전까지는 값을 그대로 유지
  * currnet 속성은 값을 변경해도 상태를 변경할 때 처럼 React 컴포넌트가 재렌더링 안됨
  * 렌더링과 상관없이, 마운트된 시점부터 언마운트된 시점까지 값을 유지


#### useRef 요약
```typescript
//생성 
const 변수명 = useRef(초기값)
// {current: 초기값} 을 지닌 객체가 반환됨 

//반환요소에 접근
<input ref={변수명}/>
```
* 변화는 감지하지만 렌더링 발생 X ➡️  성능향상 (state는 변화시, 재렌더링됨)
* DOM요소에 손쉽게 접근 (ref속성 사용)
* 생명주기를 통해 유지 (언마운트 되기전까지는 값을 계속 기억함)


### ChangeEventHandler
### FormEventHandler
### provider
### Context API

### Day.js

* dayjs .fromNow 사용하게 해주는 플러그인 - https://day.js.org/docs/en/plugin/relative-time
``` typescript
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

dayjs(/* 타겟날짜 */).fromNow(true)

// 타겟날짜부터 지금까지의 상대 시간을 반환
// ex) 몇 초, 몇 분, 몇 시간, 
```

* dayjs/locale/ko - https://day.js.org/docs/en/durations/locale#docsNav
``` typescript
// This requires the RelativeTime plugin to work
require('dayjs/locale/es')

dayjs.duration(1, "minutes").locale("en").humanize(); // a minute
dayjs.duration(1, "minutes").locale("es").humanize(); // un minuto

// locale 을 사용하여 지역을 설정하거나 가져 올 수 있음
```
