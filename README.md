# 전의찬 202030131

## 6월 5일 강의

### Shared State

1. Shared State는 State의 공유를 의미합니다.

2. 같은 부모 컴포넌트의 state를 자식 컴포넌트가 공유해서 사용하는 것 입니다.

리액트에서 컴포넌트는 각자 독립적인 역할을 수행

- 리액트는 프레임워크 기반

- 작은 컴포넌트에서 큰 컴포넌트에 있는 것을 가져와 쓴다 ? X(클래스형 컴포넌트에는 있었음)

-

## 5월 8일 강의

## 5월 1일 강의

### 훅의 규칙

- 훅의 두가지 규칙

1. 무조건 최상위 레벨에서만 호출해야함.

따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됨.

이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 함.

2. 함수형 컴포넌트에서만 훅을 호출해야 함.

따라서 일반 자바스크립트 함수에서 훅을 호출하면 안됨.

훅은 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있음.

### 이벤트 처리하기

1. DOM에서 클릭 이벤트를 처리하는 예제 코드

```
<button onlick="activate()">
    Activate
</button>
```

2. React에서 클릭 이벤트 처리하는 예제 코드

```
<button onClick={activate}>
    Activate
</button>
```

3. 둘의 차이점

- 이벤트 이름이 onclick에서 onClick으로 변경(Camel case)
- 전달하려는 함수는 문자열에서 함수 그대로 전달

4. 이벤트가 발생했을때 해당 이벤트를 처리하는 함수를 이벤트 핸들러(Event Handler) 라고 함.

5. 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 이벤트 리스너(Event Listener)라고 부르기도 함.

## 4월 17일 강의

### 훅(Hook)

훅이란 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수를 의미한다.

1. 클래스형 컴포넌트에서는 생성자(constructor)에서 state를 정의하고, setState() 함수를 통해 state를 업데이트함.

2. 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었음

3. 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 훅(Hook)입니다.

4. 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 되었습니다.

5. 훅의 이름은 모두 'use'로 시작합니다.

6. 사용자 정의 훅(custom hook)을 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 'use'로 시작할 것을 권장합니다.

### useState

useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook

첫번째 항목은 state의 이름(변수명)

두번째 항목은 state의 set함수임. 즉 state를 업데이트 하는 함수

함수를 호출 할 때 state의 초기값을 설정함

함수의 리턴 값은 배열의 형태임

```
import React, { useState} from "react"

export default function Counter(props) {
    // let counter = 0
    const [count, setCount] = useState(0)

    return (
        <>
            <p>총 {count}</p>
            <button onClick={() => setCount(count+1)}>
                클릭
            </button>
        </>
    )
}
```

### useEffect

이 함수는 사이드 이펙트를 수행하기 위한 것

- useState와 함께 가장 많이 사용하는 Hook.

- 영어로 side effect는 부작용을 의미하며 일반적으로 프로그래밍에서 사이드 이펙트는 '개발자가 의도하지 않은 코드가 실행되며 버그가 발생하는 것'을 말함.

- 리액트에서는 효과 또는 영향을 뜻하는 effect의 의미에 가까움.

- 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없기 때문임.

- 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공

useEffect(이펙트 함수, 의존성 배열);

- useEffect()함수는 다음과 같이 사용

- 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어감.

- 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행 됨.

### useMemo

- useMemo() 혹은 Memoized value를 리턴하는 훅임.

- 이전 계산값을 갖고 있기 때문에 연산량이 많은 작옵의 반복을 피할 수 있음.

- 이 훅은 렌더링이 일어나는 동안 실행됨.

- 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업은 넣으면 안됨.

```
const memoizedValue = useMemo(
    () => {
        // 연산량이 높은 작업을 수행하여 결과를 반환
        return computeExpensiveValue(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
);
```

- useEffect에서 실행되어야 할 사이드 이펙트 같은 것임.

- 다음 코드와 같이 의존성 배열을 넣지 않을 경우, 렌더링이 일어날 때마다 매번 함수가 실행됨.

- 따라서 의존성 배열을 넣지 않는 것은 의미가 없음.

- 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행 됨.

```
const memoizedValue = useMemo(
    () => computeExpensiveValue(a, b)
);
```

### useCallback

- useCallback() 훅은 useMemo()와 유사한 역할을 함.

- 차이점은 값이 아닌 함수를 반환한다는 점

- 의존성 배열을 파라미터로 받는 것은 useMemo와 동일함.

- 파라미터로 받은 함수를 콜백이라고 부름.

```
const memoizedCallback = useCallback(
    () => {
        doSomething(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
);
```

### useRef

- useRef() 훅은 레퍼런스를 사용하기 위한 훅임.

- 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미함.

- useRef() 훅은 바로 이 레퍼런스 객체를 반환함.

- 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미함.

1. FocusButton.jsx

```
// FocusButton.jsx
import { useRef } from "react";

export default function FocusButton (props) {
    const inputElem = useRef(null)

    const onButtonClock = () => {
        inputElem.current.focus()
    }
    return (
        <>
        <input ref={inputElem} type="text" />
        <button onClick={onButtonClock}>Focus the input</button>
        </>
    )
}
```

2. Counter.jsx

```
// Counter.jsx
import React, { useEffect, useState} from "react"

export default function Counter(props) {
    // let counter = 0
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `총 ${count}번 클릭했습니다.`
    })

    return (
        <>
            <p>총 {count}</p>
            <button onClick={() => setCount(count+1)}>
                클릭
            </button>
        </>
    )
}
```

3. WithCounter.jsx

```
// WithCounter.jsx
import React, { useEffect, useState} from "react"

export default function WithCounter(props) {
    // let counter = 0
    const [count, setCount] = useState(100)

    useEffect(()=>{
        document.title = `총 ${count}번 클릭했습니다.`
    })

    const [isOnline, setIsOnline] = useState(null)
    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
    return () => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
    }
})

// function handleStatusChange{status} {
//     setIsOnline.status.isOnline
// }

    return (
        <>
            <p>총 {count}</p>
            <button onClick={() => setCount(count+1)}>
                클릭
            </button>
        </>
    )
}
```

4. MeasureEx.jsx

```
// MeasureEx.jsx
import { useCallback, useState } from "react";

export default function MeasureEx(props) {
    const [height, setHeight] = useState(0)
    const measureRef = useCallback(node => {
        if(node != null) {
        setHeight(node.getBoundingClientRect().height)
    }
    }, [])
    return(
    <>
        <h1 ref={measureRef}>안녕, 리액트</h1>
        <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
    </>
    )
}
```

## 4월 3일 강의

### Props 사용법

JSX에서는 key-value쌍으로 props를 구성합니다.

```
function App(props){
    return(
        <Profile
            name="소플"
            ////="안녕하세요, 소플입니다."
            viewCount=(1500)
            />
    )
}
```

위 코드는

1. Profile 컴포넌트로 name, introduction, viewCount에 각각 속성을 할당하는,

2. 이 때 전달되는 props는 다음과 같은 자바스크립트 객체입니다.

```
{
    name: "소플",
    introduction: "안녕하세요, 소플입니다.",
    viewCount: 1500
}
```

JSX에서는 중괄호를 사용하면 JS코드를 넣을 수 있다고 배웠습니다.

다음 코드처럼 props를 통해서 value를 할당 할 수도 있고, 직접 중괄호를 사용하며 할당할 수도 있습니다.

```
function App(props){
    return(
        <Layout
            width=(2560)
            height=(1440)
            header=(
                <Header title="소플의 블로그입니다."/>
            )
            footer={
                <Footer />
            }
        />
    )
}
```

### 컴포넌트 만들기

### 컴포넌트의 종류

리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했습니다.

이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다.

예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에, 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 합니다.

### 컴포넌트 이름 짓기

이름은 항상 대문자로 시작합니다.

왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문입니다. html tag

컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.

### 컴포넌트의 렌더링

### 컴포넌트 합성

컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것입니다.

리액트에서는 컴포넌트 안에 또 다른 컴포넌트

### 컴포넌트 추출

복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있습니다.

큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것입니다.

실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.

### State란

State는 React 컴포년트의 상태를 의미합니다.

상태의 의미는 정상인지 비정상인지가 아니라 컴포년트의 데이터를 의미 정확히는 컴포넌트의 변경 가느한 데이터를 의미합니다.

State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 포함시켜야 합니다.

### 생명주기에 대해 알아보기

생면주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것입니다.

constructor가 실행.되면서 컴포넌트가 생성됩니다.

생성 직후 componentDidMount() 함수가 호출됩니다.

멈포넌트가 소멸하기 전까지 여러 번 랜더링 합니다.

렌더링은 props, setState(), forceUodate ()에 의해 상태가 변경되면 이루어집니다.

그리고 렌더링이 끝나면 componentDinUpdate() 할수가 호출됩니다.

마지막으로 컴포넌트가 마운트 되면 compomentwillunmaunt() 함수가 호출됩니다.

## 3월 27일 강의

### JSX의 역할

JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.

React 가 createElement 함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.

만일 JS 로 작업할 경우 직접 createElement 함수를 사용해야 합니다.

앞으로 설명하는 코드를 보면 알 수 있지만 결국 JSX 는 가독성을 높여 주는 역할을 합니다.

### JSX의 장점

코드가 간결해 집니다.

가독성이 향상 됩니다.

Injection Attack 이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.

```
JSX 사용함
<div>Gello, {name}</div>

JSX 사용 안 함
React.createElement('div', null, 'Hello, ${name}');
```

### JSX 사용법

모든 자바스크립트 문법을 지원합니다.

자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다.

아래 코드의 2번 라인처럼 섞어서 사용하는 것입니다.

만일 html 이나 xml 에 자바스크립트 코드를 사용하고 싶으면 () 괄호를 사용합니다.

```
01 const name = "소플";
02 const element = <h1>안녕, {name}</h1>
03
04 ReactDOM.render(
05    element,
06    document.getElementById('root')
07 );
```

만일 태그의 속성값을 넣고 싶을 때는 다음과 같이 합니다.

```
큰 따옴표 사이에 문자열을 넣거나
const element = <div tabIndex = "0"></div>;

중괄호 사이에 자바스크립트 코드를 넣으면 됩니다.
const element = <img src={user.avatarUrl}></img>;
```

### 엘리먼트에 대해 알아보기

### 엘리먼트의 정의

엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.

공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들" 이라고 설명하고 있습니다.

웹사이트의 경우는 DOM 엘리먼트이며, HTML요소를 의미합니다.

### 리액트 엘리먼트와 DOM 엘리먼트의 차이점

리액트 엘리먼트는 Virtual DOM의 형태를 취하고 있습니다.

DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁습니다.

반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가볍습니다.

### 엘리먼트의 생김새

리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.

컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체입니다.

이 객체는 마음대로 변경할 수 없는 불편성을 갖고 있습니다.

### 엘리먼트의 특징

리액트 엘리먼트의 가장 큰 특징은 불변성입니다.

즉, 한 번 생성된 엘리먼트의 children 이나 속성(attributes)을 바꿀 수 없습니다.

### 컴포넌트에 대해 알아보기

리액트는 컴포넌트 기반의 구조를 갖습니다.

컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미합니다.

컴포넌트 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있습니다.

컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서는 유사합니다.

다만 입력과 출력은 입력은 Props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됩니다.

엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷합니다.

### Props에 대해 알아보기

### Prop의 개념

props는 prop(property : 속성, 특성)의 준말입니다.

이 props 가 바로 컴포넌트의 속성입니다.

컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됩니다.

props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.

에어비앤비의 예도 마찬가지 입니다.

### Props의 특징

읽기 전용입니다. 변경할 수 없다는 의미입니다.

속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

### Pure 함수 vs Impure 함수

Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수 입니다.

Impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수 입니다.

```
// pure 함수
// input을 변경하지 않으며 같은 input에 대해서 항상 같은 output을 리턴

function sum(a, b){
    return a + b;
}
```

```
// impure 함수
// input 을 변경함
function withdraw(account, amount)(
    account.total -= amount;
)
```

리액트 공식 문서에는 컴포넌트의 특징을 다음과 같이 설명하고 있습니다.

All React components must act like pure function with respect to their props.

모든 리액트 컴포넌트는 그들의 props에 관해서는 Pure 함수 같은 역할을 해야 한다.

다시 말해 "모든 리액트 컴포넌트는 props를 직접 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과를 보여준다."는 이야기 입니다.

## 3월 20일 강의

### 리액트 개념 정리

- 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것이 바로 리액트

- 다른 표현으로는 SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구라고 생각하면 됨

### 리액트의 장점

```
이 것을 가능하게 하는 것이 바로 Virtual DOM입니다.

DOM(Document Object Model)이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스입니다. 이 것은 W3C의 표준입니다.

Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법입니다.

DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링을 합니다.
```

### 컴포넌트 기반 구조

> 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
>
> > 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
> >
> > > 그래서 리액트로 개발을 하다 보면 레고 블록을 조립하는 것 처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됩니다.
> > >
> > > > 아래 그림은 에어비앤비 사이트 화면의 컴포넌트 구조 입니다. 재사용성이 뛰어납니다.

### 재사용성

1. 반복적인 작업을 줄여주기 때문에 생산성을 높여 줍니다.

2. 또는 유지보수가 용이합니다.

3. 재사용이 가능 하려면 해당 모듈의 의존성이 없어야 합니다.

### 든든한 지원군

**메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있습니다.**

### 활발한 지식 공유 & 커뮤니티

### 모바일 앱 개발기능

**_리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼(cross-platform)모바일앱을 개발할 수 있습니다._**

### 리액트의 단점

- 방대한 학습량

자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다.

- 높은 상태 관리 복잡도

state, component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.

## 3월 13일 강의

~~내용~~

**내용1**

~~내용~~

_내용_

**내용**

_내용_
