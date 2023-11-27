import { Button, Box } from '@mui/material';
import { useContext } from 'react';
import { resetGameData } from '../../../utils/fetch/resetGame';
import Context from '../../context/userContext';

const DrawGameComponent = () => {
    const { handleDraw, winData, setWinData, getGame,  updateTicketList, getAllTicketsData } = useContext(Context);

    const handleReset = async () => {
        /* handle reset: trigger function to update the games db. */
        if (winData && winData.previousGameId) {
            await resetGameData(winData.previousGameId); //reset the win data in ls.
            setWinData(null); //reset the win Data in ls.
            await getGame(); //reset also the gamedata.

        } else {
            console.log('No winData avaiable, or the game is still actve.')
        }
    };

    return (
        <Box>
            <Button variant='outlined' fullWidth onClick={ winData ? handleReset : handleDraw}>
                {winData ? 'New Game' : 'Draw Game'}
            </Button>
        </Box>
    )
};

export default DrawGameComponent;