import{h as t}from"./hooks.module-6e460002.js";import{u as v}from"./use-initial-focus-83cf3b2e.js";import{T as p}from"./textbox-color-3f13e9bb.js";import{o as s}from"./jsxRuntime.module-893eb125.js";import{M as T}from"./mixed-values-e51728b2.js";import"./preact.module-6cc36cb9.js";import"./create-class-name-71c46838.js";import"./get-current-from-ref-47f174f6.js";import"./raw-textbox-numeric-ad94f241.js";import"./compute-next-value-3d847061.js";import"./is-keycode-character-generating-0746a523.js";const se={parameters:{order:2},title:"Components/Textbox Color/Border"},i=function(){const[n,r]=t(""),[a,c]=t("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},x=function(){const[n,r]=t(""),[a,c]=t("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{...v(),hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},C=function(){const[n,r]=t(""),[a,c]=t("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,hexColorPlaceholder:"Color",onHexColorInput:l,onOpacityInput:u,opacity:a,opacityPlaceholder:"%",variant:"border"})},y=function(){const[n,r]=t(""),[a,c]=t("");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{...v(),hexColor:n,hexColorPlaceholder:"Color",onHexColorInput:l,onOpacityInput:u,opacity:a,opacityPlaceholder:"%",variant:"border"})},d=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},I=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{...v(),hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},g=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{disabled:!0,hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},H=function(){const[n,r]=t(T),[a,c]=t(T);function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,variant:"border"})},O=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){const e=o.currentTarget.value;console.log(e),r(e)}function u(o){const e=o.currentTarget.value;console.log(e),c(e)}return s(p,{hexColor:n,onHexColorInput:l,onOpacityInput:u,opacity:a,revertOnEscapeKeyDown:!0,variant:"border"})},h=function(){const[n,r]=t("0D99FF"),[a,c]=t("100%");function l(o){console.log(o)}function u(o){console.log(o)}return s(p,{hexColor:n,onHexColorValueInput:r,onOpacityNumericValueInput:u,onOpacityValueInput:c,onRgbaColorValueInput:l,opacity:a,variant:"border"})};var m,w,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('');
  const [opacity, setOpacity] = useState<string>('');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="border" />;
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,E,b;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('');
  const [opacity, setOpacity] = useState<string>('');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor {...useInitialFocus()} hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="border" />;
}`,...(b=(E=x.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var F,M,X;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('');
  const [opacity, setOpacity] = useState<string>('');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} hexColorPlaceholder="Color" onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} opacityPlaceholder="%" variant="border" />;
}`,...(X=(M=C.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var D,J,L;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('');
  const [opacity, setOpacity] = useState<string>('');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor {...useInitialFocus()} hexColor={hexColor} hexColorPlaceholder="Color" onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} opacityPlaceholder="%" variant="border" />;
}`,...(L=(J=y.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var V,R,P;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="border" />;
}`,...(P=(R=d.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var N,_,G;I.parameters={...I.parameters,docs:{...(N=I.parameters)==null?void 0:N.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor {...useInitialFocus()} hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="border" />;
}`,...(G=(_=I.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,B,A;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor disabled hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="border" />;
}`,...(A=(B=g.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var j,k,q;H.parameters={...H.parameters,docs:{...(j=H.parameters)==null?void 0:j.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>(MIXED_STRING);
  const [opacity, setOpacity] = useState<string>(MIXED_STRING);
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} variant="border" />;
}`,...(q=(k=H.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,Q,U;O.parameters={...O.parameters,docs:{...(z=O.parameters)==null?void 0:z.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    console.log(newHexColor);
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    console.log(newOpacity);
    setOpacity(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorInput={handleHexColorInput} onOpacityInput={handleOpacityInput} opacity={opacity} revertOnEscapeKeyDown variant="border" />;
}`,...(U=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,Y,Z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`function () {
  const [hexColor, setHexColor] = useState<string>('0D99FF');
  const [opacity, setOpacity] = useState<string>('100%');
  function handleRgbaColorValueInput(newRgbaColor: null | RGBA) {
    console.log(newRgbaColor);
  }
  function handleOpacityNumericValueInput(newOpacity: null | number) {
    console.log(newOpacity);
  }
  return <TextboxColor hexColor={hexColor} onHexColorValueInput={setHexColor} onOpacityNumericValueInput={handleOpacityNumericValueInput} onOpacityValueInput={setOpacity} onRgbaColorValueInput={handleRgbaColorValueInput} opacity={opacity} variant="border" />;
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ie=["Empty","EmptyFocused","Placeholder","PlaceholderFocused","Filled","Focused","Disabled","Mixed","RevertOnEscapeKeyDown","OnValueInput"];export{g as Disabled,i as Empty,x as EmptyFocused,d as Filled,I as Focused,H as Mixed,h as OnValueInput,C as Placeholder,y as PlaceholderFocused,O as RevertOnEscapeKeyDown,ie as __namedExportsOrder,se as default};
//# sourceMappingURL=textbox-color-border.stories-7b29d45e.js.map