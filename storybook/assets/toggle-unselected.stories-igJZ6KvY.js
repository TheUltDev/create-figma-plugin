import{h as d}from"./create-component-a83A1_Pu.js";import{u as E}from"./use-initial-focus-xmfxIugy.js";import{T as g}from"./text-SssoFudj.js";import{T as i}from"./toggle-Ssv4YiRN.js";import{u as e}from"./jsxRuntime.module-mP9ZGqev.js";import"./preact.module-pS-_M4k6.js";import"./create-class-name-gq91Tlk7.js";import"./no-op-Uu3q6ZSj.js";const L={tags:["1"],title:"Components/Toggle/Unselected"},r=function(){const[n,o]=d(!1);function t(a){const l=a.currentTarget.checked;console.log(l),o(l)}return e(i,{onChange:t,value:n,children:e(g,{children:"Text"})})},s=function(){const[n,o]=d(!1);function t(a){const l=a.currentTarget.checked;console.log(l),o(l)}return e(i,{...E(),onChange:t,value:n,children:e(g,{children:"Text"})})},u=function(){function n(){throw new Error("This function should not be called")}return e(i,{disabled:!0,onChange:n,value:!1,children:e(g,{children:"Text"})})},c=function(){const[n,o]=d(!1);function t(a){console.log(a),o(a)}return e(i,{onValueChange:t,value:n,children:e(g,{children:"Text"})})};var h,T,m;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Toggle onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Toggle>;
}`,...(m=(T=r.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var f,p,V;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setValue(newValue);
  }
  return <Toggle {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Toggle>;
}`,...(V=(p=s.parameters)==null?void 0:p.docs)==null?void 0:V.source}}};var C,v,x;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`function () {
  function handleChange() {
    throw new Error('This function should not be called');
  }
  return <Toggle disabled onChange={handleChange} value={false}>
      <Text>Text</Text>
    </Toggle>;
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,b,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<boolean>(false);
  function handleValueChange(newValue: boolean) {
    console.log(newValue);
    setValue(newValue);
  }
  return <Toggle onValueChange={handleValueChange} value={value}>
      <Text>Text</Text>
    </Toggle>;
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const M=["Passive","Focused","Disabled","OnValueChange"];export{u as Disabled,s as Focused,c as OnValueChange,r as Passive,M as __namedExportsOrder,L as default};
