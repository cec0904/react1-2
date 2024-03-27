# 전의찬 202030131

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
