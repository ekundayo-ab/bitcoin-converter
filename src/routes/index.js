import BasicInfoView from "../components/views/BasicInfoView";
import CurrencyView from "../components/views/CurrencyView";
import NotFoundView from "../components/views/NotFoundView";
import ResultsView from "../components/views/ResultsView";

export default [
  {
    exact: true,
    path: '/',
    component: BasicInfoView,
    title: "let's know you"
  },
  {
    exact: true,
    path: '/currencies',
    component: CurrencyView,
    title: "choose currencies"
  },
  {
    exact: true,
    path: '/results',
    component: ResultsView,
    title: "whoops!!! conversions here"
  },
  {
    path: '*',
    component: NotFoundView
  }
]
