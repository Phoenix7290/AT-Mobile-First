import{j as e,c as o,R as s}from"./client-CZ7ZPx7S.js";import{f as l,d as t,F as a}from"./index-wllFbIp1.js";import{a as c,b as x}from"./index-Ck83Ydhk.js";import{a as h}from"./index-qpeRlP0q.js";import{M as d}from"./index-I7caOuX8.js";import"./iconBase-D8QjFRKA.js";const m="/AT-Mobile_First/assets/infnet-CkatkSVG.jpeg",p=l`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`,r={md:"768px"},b=t.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  border: 3px solid black;
  border-radius: 2%;
  margin: 3vw;

  @media (min-width: ${r.md}) {
    flex-flow: row wrap;
  }
`,j=t.div`
  width: 100%;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${r.md}) {
    width: 40%;
    border: none;
    border: none;
    height: 50vh;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
  }
`,f=t.img`
  width: 50vw;
  height: auto;

  @media (min-width: ${r.md}) {
    max-width: 40vh;
    height: auto;
  }
`,g=t.div`
  width: 100%;
  text-align: center;
  border-bottom: 3px solid black;
  padding: 5% 0;

  @media (min-width: ${r.md}) {
    width: 40%;
    border: none;
    height: 50vh;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
  }
`,w=t.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 5% 0;
  border-bottom: 3px solid black;

  @media (min-width: ${r.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    gap: 2vh;
    width: 20%;
    border: none;
    padding: 0;
    height: 50vh;
    border-bottom: 3px solid black;
  }
`,u=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  padding: 5% 0;

  @media (min-width: ${r.md}) {
    width: 50%;
    border: none;
  }
`,k=t.table`
  width: 40vw;
  border-collapse: collapse;
  border: 2px solid black;
`,n=t.th`
  text-align: center;
  border: 2px solid black;
  padding: 1%;
`,i=t.td`
  text-align: center;
  border: 2px solid black;
  padding: 1%;
`;function y(){return e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(f,{src:m,alt:"Image"})}),e.jsxs(g,{children:[e.jsx("h1",{children:"Nome Completo"}),e.jsx("p",{children:"Data de Nascimento"}),e.jsx("p",{children:"Setor"}),e.jsx("p",{children:"Cargo"})]}),e.jsxs(w,{children:[e.jsx(c,{style:{fontSize:"2rem"}}),e.jsx(h,{style:{fontSize:"2rem"}}),e.jsx(a,{style:{fontSize:"2rem"}})]}),e.jsx(u,{children:e.jsxs(k,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(n,{children:"Estado"}),e.jsx(n,{children:"Tarefas"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx(i,{children:e.jsx(x,{})}),e.jsx(i,{children:"Tarefa 1"})]}),e.jsxs("tr",{children:[e.jsx(i,{children:e.jsx(d,{})}),e.jsx(i,{children:"Tarefa 2"})]}),e.jsxs("tr",{children:[e.jsx(i,{children:e.jsx(d,{})}),e.jsx(i,{children:"Tarefa 3"})]})]})]})})]})]})}function C(){return e.jsx("div",{children:e.jsx(y,{})})}o.createRoot(document.getElementById("root")).render(e.jsx(s.StrictMode,{children:e.jsx(C,{})}));
