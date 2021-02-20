export default function onParamsUp(param, allList, activeList) {
  const skill = allList
    .map((item) => {
      return activeList.includes(item.id) ? item[param] : null;
    })
    .reduce((res, item) => {
      return (res += +item);
    }, 0);
  return skill;
}
