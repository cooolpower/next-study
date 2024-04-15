## 스터디 참조

### 인터넷 강의

- <a href="https://www.inflearn.com/course/next-react-query-sns%EC%84%9C%EB%B9%84%EC%8A%A4#" target="_blank">Next + React Query로 SNS 서비스 만들기</a>
- <a href="https://github.com/ZeroCho/next-app-router-z/tree/master" target="_blank">강의 교본</a>

### 문서

- <a href="https://react-ko.dev/" target="_blank">리액트 한글 문서</a>

### 블로그

- <a href="https://velog.io/@ssoon-m/react-key-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EB%8B%A4%EB%A3%A8%EA%B8%B0" target="_blank">React Key</a>
- <a href="https://www.nextree.io/riaegteu-rendeoring-mic-coejeoghwa/" target="_blank">리액트 랜더링 및 최적화</a>
- <a href="https://react.vlpt.us/" target="_blank">벨로퍼트와 함께하는 모던 리액트</a>ddd

### 영상

- <a href="https://youtu.be/HHKV9XbXUOw?si=-8fnEYhdrl9RnuxH" target="_blank">벨로퍼트와 함께하는 모던 리액트</a>

<br /><br />

## 강의 내용 및 복습 필요한 내용

### 2/21 ~ 2/28

### 2/28 ~ 3/5

### 3/6 ~ 3/12

- useFormState()
- useFormStatus()
- middleware
- Catch-all Segment
- Server Actions
- authjs
- error - import/no-anonymous-default-export

### useRef

특정한 DOM요소에 접근이 가능하면, 불필요한 재렌더링을 하지 않는다

#### useRef 생성

```ts
const 변수명 = useRef(초기값); // {current:  초기값}  을 지닌 객체가 반환
```

- current라는 키값을 지닌 프로퍼티가 생성되고, 값에 어떤 변경을 줄때도 이 current를 이용해서 변경 한다

#### useRef 사용

```ts
<input ref={변수명} />
```

- ref는 state와 비슷하게 어떤 값을 저장하는 저장공간으로 사용
  - State의 변화 ➡️ 렌더링 됨 ➡️ 컴포넌트 내부 변수들 초기화
  - State의 변화 ➡️ 렌더링 됨 ➡️ 그래도 Ref의 값은 유지
  - Ref의 변화 ➡️ 렌더링 안됨 ➡️ 변수들의 값이 유지
- 변경시 렌더링을 발생시키지 말아야하는 값을 다룰때 사용 (변화는 감지해야하지만, 그 변화가 렌더링을 발생시키면 안될때)

#### useRef 특징

- 반환된 useRef 객체는 컴포넌트의 생명주기를 통해 유지
  - 컴포넌트가 계속해서 렌더링이 되어도 컴포넌트가 언마운드되기 전까지는 값을 그대로 유지
  - currnet 속성은 값을 변경해도 상태를 변경할 때 처럼 React 컴포넌트가 재렌더링 안됨
  - 렌더링과 상관없이, 마운트된 시점부터 언마운트된 시점까지 값을 유지

#### useRef 요약

```ts
//생성
const 변수명 = useRef(초기값)
// {current: 초기값} 을 지닌 객체가 반환됨

//반환요소에 접근
<input ref={변수명}/>
```

- 변화는 감지하지만 렌더링 발생 X ➡️ 성능향상 (state는 변화시, 재렌더링됨)
- DOM요소에 손쉽게 접근 (ref속성 사용)
- 생명주기를 통해 유지 (언마운트 되기전까지는 값을 계속 기억함)

### ChangeEventHandler

### FormEventHandler

### provider

### Context API

### TTFB, FP, FCP

- TTFB(Time to First Byte) - HTTP 요청을 보낼 경우, 서버에서부터 첫번째 Byte (정보) 가 오기까지 걸리는 시간
- FP (First Paint) - 첫번째 픽셀 이 스크린에 Paint 되었을 때의 시간을 의미한다.
- FCP (First Contentful Paint) - DOM에 속한 컨텐츠의 일부가 스크린에 Paint 되었을 때의 시간을 의미한다.
- FP, FCP의 사용 목적은 얼마나 빨리 화면이 렌더링 되는지를 측정, Chrome의 timing API로 추적이 가능

### SSG (Static Site Generator)

- SSR 처럼 서버로부터 렌더링된 HTML을 받아 오지만, HTML의 생성 시점이 빌드 타임이라는 것이 SSR과의 차이점
- SSR의 경우 요청이 들어오면 그때마다 필요한 HTML을 렌더링해야 하지만, SSG의 경우 HTML을 사전에 빌드 타임에서 생성 하였으므로 이를 전송만 하면 됨
- 정적 페이지를 제공하는 것은 아니라 빌드 타임에 생성된 HTML 파일이 정적이라는 의미. FCP 이후 JS 파일을 받아 인터렉션을 제공 가능함
- React로 개발된 애플리케이션을 Gatsby 라이브러리를 통해 빌드하여 정적인 사이트들로 변환 시켜 줌

### SSG (Static Site Generator) 동작 과정

- 사용자가 웹 페이지를 방문할 경우, \*엣지 캐싱된 HTML 파일을 클라이언트로 반환 함
- 브라우저는 HTML을 받고 이를 띄워 사용자가 사이트를 볼 수 있도록 함
  > 엣지 캐싱 (Edge Caching)  
  > 클라이언트의 컴퓨터에 최대한 가깝게 (물리적인 거리) 콘텐츠를 저장하여 대기 시간을 줄이기 위해 캐싱 서버를 사용하는 것. 주로 CDN 전략을 많이 사용

### Universal Rendering

- SSR을 통해 초기에 빠른 FCP를 구현한 이후, 클라이언트 단위에서 hydration 기법을 통해 JS 파일을 적용하여 인터렉션을 가능하게끔 하는 방식.
- 초기 로딩 시에는 SSR처럼 작동하고, 이후에는 CSR로 작동하는 방식이며 Next.js, Nuxt.js 와 같은 프레임워크를 사용

### Universal Rendering 동작 과정

1. 사용자가 웹 페이지를 방문할 경우, 서버는 이를 확인하고 브라우저에게 제공할 HTML 컨텐츠를 컴파일
2. 컴파일 된 HTML은 브라우저에 제공, 브라우저는 이를 다운로드하고 렌더링하여 사용자가 이를 볼 수 있도록 함
3. 이후 JS 파일을 다운로드 받은 후 실행하여 사용자와 페이지 간의 인터렉션을 가능하게 함
4. 사용자가 다른 페이지로 이동을 진행할 경우, 다운로드 받은 JS 파일을 활용하여 렌더링 (CSR) 을 진행

#### No Pre-rendering(Plain React.js app)

- CSR 기법을 사용하는 React의 경우, 초기 로딩 시에는 텅 빈 화면을 보여주고 렌더링 과정에서 HTML을 구축하고 번들링된 JS 코드를 적용.

#### Pre-rendering(Using Next.js)

- Universal Rendering의 경우 서버에서 사전에 필요한 HTML을 렌더링하고, 이후 클라이언트에서 번들링된 JS 코드를 적용.

### Hydration

JS 코드 내의 "이벤트 핸들러" 함수들을 정적인 DOM 노드들에 붙여서 동적으로 상호작용이 가능하도록 바꾸어주는 기능.  
즉, 사용자가 단순히 웹 사이트의 화면을 보는 것이 아니라 실질적인 상호작용을 가능하게끔 하는 과정.

새롭게 요소를 만드느냐 vs 원래 있던 요소를 찾아 js만 적용하느냐

- 컴포넌트를 렌더링하고 이벤트 핸들러를 연결하는 프로세스를 Hydration이라고 함.
- 인터랙션 기능 및 이벤트 핸들러를 이용해 HTML동작하게 해주는 것.
- Hydration 후 애플리케이션은 인터랙티브하게 클릭 등 사용자 입력에 응답함.
- TTV (Time to View) → Hydrate → TTI (Time to Interact)
  - TTV (Time to View) - 사용자가 어플리케이션 화면을 **보기**까지 걸리는 시간
  - TTI (Time to Interact) - 사용자가 어플리케이션 화면과 **상호작용** 하기까지 걸리는 시간
- TTV가 빠르면 화면이 빨리 보임, TTI가 빠르다면 웹을 빨리 사용

#### render()

```JSX
ReactDOM.render(element, container[, callback])
```

- `ReactDOM.render()` 함수는 두번째 파라미터인 지정된 DOM 요소에 하위로 추가하여 렌더링.
- 렌더링이 완료되면 특정 이벤트를 처리할 콜백함수를 세번째 인자로 넣어줌.

#### hydrate()

- `ReactDOM.hydrate()` 함수는 특정 컴포넌트를 두번째 파라미터인 지정된 DOM 요소에 하위로 Hydrate.
- 렌더링을 통해 새로운 웹페이지를 구성하는 것이 아니라 기존 DOM Tree에서 해당되는 DOM 요소를 찾아 정해진 자바스크립트 속성들만 적용.

### useFormState()

- react 에서 지원

useFormState는 form작업의 결과에 따라 상태를 업데이트할 수 있는 Hook

```ts
const [state, formAction] = useFormState(fn, initialState, permalink?);
```

#### Reference

`useFormState(action, initialState, permalink?)`

- useFormState에 기존 양식 작업 함수와 초기 상태를 전달하면 최신 양식 상태와 함께 양식에서 사용하는 새 작업이 반환됩니다.
- 최신 양식 상태는 제공한 함수에도 전달됩니다.

```ts
import { useFormState } from "react-dom";

async function increment(previousState, formData) {
  return previousState + 1;
}

function StatefulForm({}) {
  const [state, formAction] = useFormState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  );
}
```

- 양식이 마지막으로 제출되었을 때 작업에 의해 반환된 값
- 양식이 아직 제출되지 않은 경우 통과한 초기 상태
- 서버 작업과 함께 사용하는 경우 useFormState를 사용하면 hydration이 완료되기 전에도 서버의 form 내용 제출 응답이 표시될 수 있음.

#### Parameters

- fn: 양식을 제출하거나 버튼을 눌렀을 때 호출되는 함수입니다. 함수가 호출되면 form의 이전 상태(처음에는 전달한 초기 상태, 이후에는 이전 반환 값)를 초기 인수로 수신하고 그 뒤에는 양식 작업이 일반적으로 수신하는 인수가 이어짐.
- initialState: 초기상태 값. 직렬화 가능한 모든 값이 될 수 있음. 이 인수는 작업이 처음 호출된 후에는 무시됨.
- permalink: 이 양식이 수정하는 고유한 페이지 URL이 포함된 문자열. 점진적 개선과 함께 동적 콘텐츠(예: 피드)가 있는 페이지에서 사용.
  - 만약에 fn이 서버 작업이고 JavaScript 번들이 로드되기 전에 form 내용이 제출되면 브라우저는 현재 페이지의 URL이 아닌 지정된 영구 링크 URL로 이동.
  - React가 상태를 전달하는 방법을 알 수 있도록 동일한 form 구성 요소가 대상 페이지(동일한 작업 fn 및 영구 링크 포함)에 렌더링되는지 확인필요. 양식이 hydrated되면 이 매개변수는 효과가 없음.

#### 주의사항

- React Server 구성 요소를 지원하는 프레임워크와 함께 useFormState를 사용하면 JavaScript가 클라이언트에서 실행되기 전에 interactive한 양식을 만들 수 있음. 서버 구성 요소 없이 사용되는 경우 구성 요소 로컬 상태와 동일.
- useFormState에 전달된 함수는 첫 번째 인수로 이전 또는 초기 상태인 추가 인수 받음. 이로 인해 useFormState를 사용하지 않고 양식 작업으로 직접 사용된 경우와 서명이 달라짐.

#### Returns

useFormState는 두 개의 값이 있는 배열을 반환

- 현재 상태. 첫 번째 렌더링 중에는 전달한 초기 상태와 같음. 호출된 후에는 작업에서 반환된 값과 같음.
- form 구성 요소에 action prop을 전달하거나 form 내의 버튼 구성 요소에 formAction prop을 전달할 수 있는 새로운 동작.

### useFormStatus()

- react 에서 지원

```ts
const { pending, data, method, action } = useFormStatus();
```

#### Reference

useFormStatus Hook은 양식 제출의 상태 정보를 제공

```ts
import { useFormStatus } from "react-dom";
import action from "./actions";

function Submit() {
  const status = useFormStatus();
  return <button disabled={status.pending}>Submit</button>;
}

export default function App() {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}
```

#### Parameters

useFormStatus는 매개변수를 사용하지 않음

#### Returns

- pending: `true`나 `false`중 `true` 인 경우 상위 `<form>`이 대기중임을 의미하고 그렇지 않으면 `false` .

- data: 상위 `<form>`이 제출하는 데이터가 포함된 `FormData` 인터페이스를 구현하는 개체. 전송할 데이터가 없거나 상위 `<form>`이 없으면 `null`.

- method: `'get'`과 `'post'`는 문자열 값. 이는 상위 `<form>`이 `GET` 또는 `POST`인 HTTP메소드로 제출하는지 여부를 나타냄.  
  기본적으로 `<form>`은 GET속성을 사용하고 `method`속성으로 지정할 수 있음.

- actionaction: 상위 `<form>`의 `action prop`에 전달된 함수에 대한 참조. 상위 `<form>`이 없으면 속성은 `null`.  
  `action prop`에 `URI` 값이 제공되거나 지정된 `action prop`이 없으면 `status.action`은 `null`.

#### 주의사항

- useFormStatus hook은 `<form>` 내부에 렌더링되는 구성 요소에서 호출되어야 합니다.
- 상태 정보를 얻으려면 제출할 구성 요소가 `<form>` 내에서 렌더링되어야 합니다. hook은 양식이 적극적으로 제출되고 있는지 알려주는 `pending` 속성과 같은 정보를 반환합니다.
- useFormStatus는 상위 `<form>`에 대한 상태 정보만 반환합니다. 동일한 구성 요소나 하위 구성 요소에서 렌더링된 `<form>`에 대한 상태 정보를 반환하지 않습니다.

#### 사용방법

**양식 제출 중 보류 상태 표시**

양식이 제출되는 동안 보류 상태를 표시하려면 `<form>`에 렌더링된 구성 요소에서 `useFormStatus` hook을 호출하고 반환된 보류 속성을 읽을 수 있습니다.

```ts
import { useFormStatus } from "react-dom";
import { submitForm } from "./actions.js";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function Form({ action }) {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}

export default function App() {
  return <Form action={submitForm} />;
}
```

### middleware

- App Router 에서 지원하는 기능
- 로그인 상태에 따른 페이지 노출 설정
- matcher 에 설정된 라우트는 페이지 렌더링 되기 전 미들웨어 함수가 실행됨. (로그인 했으면 통과, 로그인 안했으면 설정한 페이지로 이동)

### Catch-all Segment

- Catch-all 라우트
- `[...folderName]`

| Route                      | Example URL | params                    |
| -------------------------- | ----------- | ------------------------- |
| app/shop/[...slug]/page.js | /shop/a     | { slug: ['a'] }           |
| app/shop/[...slug]/page.js | /shop/a/b   | { slug: ['a', 'b'] }      |
| app/shop/[...slug]/page.js | /shop/a/b/c | { slug: ['a', 'b', 'c'] } |

## Librarys

### <a href="https://www.npmjs.com/package/dayjs" target="_blank">dayjs</a>

- dayjs .fromNow 사용하게 해주는 플러그인 - https://day.js.org/docs/en/plugin/relative-time

```ts
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

dayjs(/* 타겟날짜 */).fromNow(true);

// 타겟날짜부터 지금까지의 상대 시간을 반환
// ex) 몇 초, 몇 분, 몇 시간,
```

- dayjs/locale/ko - https://day.js.org/docs/en/durations/locale#docsNav

```ts
// This requires the RelativeTime plugin to work
require("dayjs/locale/es");

dayjs.duration(1, "minutes").locale("en").humanize(); // a minute
dayjs.duration(1, "minutes").locale("es").humanize(); // un minuto

// locale 을 사용하여 지역을 설정하거나 가져 올 수 있음
```

### <a href="https://www.npmjs.com/package/classnames" target="_blank">classnames</a>

조건부로 클래스 합성 해줄때 사용하는 라이브러리.  
객체, 배열 및 문자열 인수를 함께 혼합할 수 있기 때문에 선택적인 className props를 지원하고 결과에 실제 인수만 포함 됨

사용방법

```ts
classNames("foo", "bar"); // => 'foo bar'
classNames("foo", { bar: true }); // => 'foo bar'
classNames({ "foo-bar": true }); // => 'foo-bar'
classNames({ "foo-bar": false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames("foo", { bar: true, duck: false }, "baz", { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, "bar", undefined, 0, 1, { baz: null }, ""); // => 'bar 1'
```

배열은 다음의 규칙에 따라 재귀적으로 평면화 됨

```ts
const arr = ["b", { c: true, d: false }];
classNames("a", arr); // => 'a b c'
```

### <a href="https://www.npmjs.com/package/@faker-js/faker" target="_blank">@faker-js/faker</a>

진짜 같은 가짜 데이터를 생성해주는 라이브러리

### <a href="https://mswjs.io/" target="_blank">msw</a>

```JavaScript
npm install msw -D
npx msw init public/ --save
```

- 실제 백엔드 서버로 보내는 요청을 가로챌 수 있음
- 프론트 개발자가 임의로 응답을 만들어낼 수 있음(성공, 400, 500 에러 모두 가능)

#### msw issues

- pnpm 으로 설치 시 모듈 찾을 수 없음
- 현재 [이슈](https://github.com/mswjs/msw/issues/1644)로 msw 서버에서 사용 불가
  - Next 자체가 내부적으로 구현되는 방식으로 인해 Next.js 13에서 프로세스 전체 논리를 설정하는 데 어려움이 있음을 발견
  - 특정 페이지의 레이아웃에 대해 업데이트가 실행되면 간헐적인 프로세스가 종료되고 새 프로세스가 생성되어 업데이트를 보류 상태를 유지할 가능성이 높음.
- 위 이슈 해결되기 전까지는 http 서버 직접 생성

### <a href="https://authjs.dev/" target="_blank">authjs</a>

로그인, 로그아웃, 내정보 불러오기 기능 사용

## Server Actions

- 회원가입에 적용하기(Next 14부터 가능)
- 클라이언트 컴포넌트에서도 server action 함수를 import 해서 사용 가능
- 폼 검사를 위해 useFormState와 useFormStatus 적용하기

### ["use server"](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)

- Server Actions은 React Actions 위에 구축된 Next.js의 알파 기능
- 서버 컴포넌트 내에서 정의하거나 클라이언트 컴포넌트에서 호출할 수 있음
- React Server Components 규약을 기반으로 직렬화 가능한 인수와 직렬화 가능한 반환 값 필요

#### 서버 컴포넌트

함수 본문의 맨 위에 "use server" 지시어를 사용하여 비동기 함수를 정의하여 Server Actions을 작성

```ts
import { cookies } from "next/headers";

// Server action defined inside a Server Component
export default function AddToCart({ productId }) {
  async function addItem(data) {
    "use server";

    const cartId = cookies().get("cartId")?.value;
    await saveToDb({ cartId, data });
  }

  return (
    <form action={addItem}>
      <button type="submit">Add to Cart</button>
    </form>
  );
}
```

#### 클라이언트 컴포넌트

파일 상단에 "use server" 지시사항이 있는 별도의 파일에 action을 작성 후 Server Actions을 클라이언트 컴포넌트로 가져옴

```ts
// app/actions.js
"use server";

export async function addItem(data) {
  const cartId = cookies().get("cartId")?.value;
  await saveToDb({ cartId, data });
}

// app/add-to-cart.js
("use client");

import { addItem } from "./actions.js";

// Server Action 이 Client Component 내부에서 호출됨
export default function AddToCart({ productId }) {
  return (
    <form action={addItem}>
      <button type="submit">Add to Cart</button>
    </form>
  );
}
```

#### Server Actions Form Forms

revalidatePath("/"); 를 사용해야 새로고침하지 않아도 데이터 업데이트를 바로 확인 가능

```plain text
- revalidatePath를 사용하면 특정 경로와 연결된 데이터를 다시 확인가능.
- 이 기능은 재검증 기간이 만료될 때까지 기다리지 않고 캐시된 데이터를 업데이트 할 때 유용.
```

#### Cookie

```ts
"use server"
  const response = await fetch(`${precess.env.NEXT_PUBLIC_API_MOCKING}/api/users`{
    method: 'post',
    body: formData,
    credentials: 'include',  // 없으면 쿠키 전달 안됨 (로그인 유무 확인 등...)
  });
```

#### redirect()

try, catch 안에서 사용 불가

## Error

```plaintext
Error: Text content does not match server-rendered html.
```

- Nextjs의 렌더링 기법에 의해 업데이트되었지만, React에서 페이지가 로드된 후 hydrate된 코드들은 업데이트되지 않았을 때 생김

```plaintext
Error: There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.
```

- App 디렉터리를 사용하는 경우 루트 구성 요소에서 `<head>`태그를 사용할 때 다음 오류가 발생할 수 있dma
- `<head>`는 Next.js가 하이드레이션 중에 페이지의 HTML 태그에 메타데이터 삽입을 제어하기 때문에 발생
- Next.js 에서 제공하는 헤드가 아닌 커스텀 `<head>` 컴포넌트를 사용하여 오류 해결 가능

```plaintext
Error: Hydration failed because the initial UI does not match what was rendered on the server.
```

- 하나의 함수를 서버에서도 한 번, 클라이언트에서도 한 번 실행하게 되면 함수 실행 결과가 랜덤이라 매 번 값이 달라지니 자연히 "서버와 클라이언트의 text content가 같지 않다"는 오류가 발생.
- 클라이언트단 작업을 위해 '임시'로 랜덤한 데이터를 내려주기로 한 것 때문에 생기는 오류라 랜덤 함수를 없애면 해결 됨.

```plaintext
Assign arrow function to a variable before exporting as module default import/no-anonymous-default-export
```

- 문서 내부에서 어떤 데이터를 직접적으로 내보낼 때 생기는 오류

```ts
export default = { a : 1, b : 2}
// error

const obj = { a : 1, b : 2}
export default obj
// not error
```
