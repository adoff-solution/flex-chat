import { useContext } from 'react';
import { Switch } from 'antd';
import { ThemeContext } from '../../theme/ThemeWrapperProvider';

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <Switch
      checked={isDarkMode}
      onChange={() => setIsDarkMode(!isDarkMode)}
      checkedChildren="🌙"
      unCheckedChildren="☀️"
    />
  );
};

export default ThemeToggle;
