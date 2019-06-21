import BasicInfo from "../components/views/BasicInfoView";
import Currency from "../components/views/CurrencyView";
import NotFound from "../components/views/NotFoundView";
import Results from "../components/views/ResultsView";

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
