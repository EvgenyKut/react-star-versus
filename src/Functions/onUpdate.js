import onParamsUp from "./onParamsUp";

export default function onUpdate(
  selectedList,
  allItemsList,
  health,
  attack,
  id,
  score,
  max
) {
  if (selectedList.includes(id)) {
    return;
  }
  let newArr = [...selectedList, id];
  let newScore = score;
  newScore--;
  if (newArr.length > max) {
    newArr = newArr.slice(1);
    newScore = 0;
  }
  let newAttack = onParamsUp("mass", allItemsList, newArr);
  let newHealth = onParamsUp("length", allItemsList, newArr);
  return { newAttack, newHealth, newArr, newScore };
}
