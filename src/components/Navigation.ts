
import { RouteProp, CompositeNavigationProp, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface StackNavigationProps<
ParamList extends ParamListBase,
RouteName extends keyof ParamList = string
>{
    navigation: StackNavigationProp<ParamList, RouteName>
    route: RouteProp<ParamList, RouteName>
}

export type Routes = {
    OnBoarding: undefined;
    Welcome: undefined;
    Login: undefined;
}