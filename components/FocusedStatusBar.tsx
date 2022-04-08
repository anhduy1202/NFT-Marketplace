import { useIsFocused } from '@react-navigation/native'
import { View, Text, StatusBar } from 'react-native'


interface IProps {
  background: string
}

const FocusedStatusBar: React.FC<IProps> = (props) => {
  const isFocused = useIsFocused();


  return isFocused ? <StatusBar animated={true} {...props}/> : null;
}

export default FocusedStatusBar