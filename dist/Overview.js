import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, Button } from 'react-native';
export const Overview = (props) => (_jsxs(View, { children: [_jsx(Text, { children: "Overview Screen" }, void 0),
        _jsx(Button, { title: "Go to Details", onPress: () => props.navigation.navigate('Details') }, void 0)] }, void 0));
