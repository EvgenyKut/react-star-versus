import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import { withData } from "../hoc-helpers";

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships } = swapiService;

const PersonList = withData(ItemList, getAllPeople);

const StarshipList = withData(ItemList, getAllStarships);

export { PersonList, StarshipList };
