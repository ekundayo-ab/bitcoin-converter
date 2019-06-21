import BasicInfo from "../components/BasicInfo";
import Currency from "../components/Currency";
import NotFound from "../components/NotFound";
import Results from "../components/Results";

export default [
  {
    exact: true,
    path: '/',
    component: BasicInfo,
    title: "let's know you"
  },
  {
    exact: true,
    path: '/currencies',
    component: Currency,
    title: "choose currencies"
  },
  {
    exact: true,
    path: '/results',
    component: Results,
    title: "whoops!!! conversions here"
  },
  {
    path: '*',
    component: NotFound
  }
]
