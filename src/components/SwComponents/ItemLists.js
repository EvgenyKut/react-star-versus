import ItemList from "../ItemList";
import SwapiService from "../../services/swapi-service";
import { WithData } from "../../HocHelpers";

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships } = swapiService;

const PersonList = WithData(ItemList, getAllPeople);

const StarshipList = WithData(ItemList, getAllStarships);

export { PersonList, StarshipList };
