import {createMuiTheme} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import lightGreen from '@material-ui/core/colors/lightGreen'

const theme = createMuiTheme({
    palette:{
        primary:{
            main:blue[500]
        },
        secondary:{
            main:lightGreen[500]
        }
    }
})

export default theme;