import {useTheme, useThemeUpdate} from "./ThemeContext";

export default function FunctionalContextComponent() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333'
    }

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1 style={themeStyles}>Function Theme</h1>
        </>
    );

}
