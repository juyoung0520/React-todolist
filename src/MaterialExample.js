import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button, StylesProvider} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const MaterialExampleBlock = styled(Card)`
    width: 512px;
    height: 768px;
    min-width: 275px;

    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;

    .title {
        font-size: 14px;
    }

    .pos {
        margin-bottom: 12px;
    }
`;

function MaterialExample() {
    return (
        <StylesProvider injectFirst>
            <MaterialExampleBlock>
                <CardContent>
                    <Typography className="title" color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography varient="h5" component="h2">
                        be nev o lent
                    </Typography>
                    <Typography className="pos" color="textSecondary">
                        adjective
                    </Typography>
                    <Typography varient="body2" component="p">
                        well meaning and kindly.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </MaterialExampleBlock>
        </StylesProvider>
    );
}

export default MaterialExample;