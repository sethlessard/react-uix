import React from 'react';
import Fragment from './Fragment';
import { Card, CardBody, Grid, Row, Text, Toolbar, ToolbarTitle } from 'react-uix';

const generateItems = (numItems) => {
    const items = [];
    for (let i = 0; i < numItems; i++) {
        items.push(<Card style={{ height: 50 }} key={i}><CardBody><Text style={{textAlign:"center"}}>{ i + 1 }</Text></CardBody></Card>);
    }
    return items;
}

const GridFragment = () => {
    return (
        <div>
            <Fragment title="Grid">


            </Fragment>
            <Row><Toolbar><ToolbarTitle>2 Columns</ToolbarTitle></Toolbar></Row>
            <Grid columns={2}>{generateItems(5)}</Grid>

            <Row><Toolbar><ToolbarTitle>3 Columns</ToolbarTitle></Toolbar></Row>
            <Grid columns={3}>{generateItems(7)}</Grid>

            <Row><Toolbar><ToolbarTitle>4 Columns</ToolbarTitle></Toolbar></Row>
            <Grid columns={4}>{generateItems(9)}</Grid>

            <Row><Toolbar><ToolbarTitle>5 Columns</ToolbarTitle></Toolbar></Row>
            <Grid columns={5}>{generateItems(11)}</Grid>

            <Row><Toolbar><ToolbarTitle>6 Columns</ToolbarTitle></Toolbar></Row>
            <Grid columns={6}>{generateItems(13)}</Grid>

            <Row><Toolbar><ToolbarTitle>7 Columns</ToolbarTitle></Toolbar></Row>
            <Grid columns={7}>{generateItems(15)}</Grid>

            <Row><Toolbar><ToolbarTitle>8 Columns</ToolbarTitle></Toolbar></Row>
            <Grid columns={8}>{generateItems(17)}</Grid>

            <Row><Toolbar><ToolbarTitle>9 Columns</ToolbarTitle></Toolbar></Row>
            <Grid columns={9}>{generateItems(19)}</Grid>

            <Row><Toolbar><ToolbarTitle>10 Columns</ToolbarTitle></Toolbar></Row>
            <Grid columns={10}>{generateItems(21)}</Grid>

            <Row><Toolbar><ToolbarTitle>11 Columns</ToolbarTitle></Toolbar></Row>
            <Grid columns={11}>{generateItems(23)}</Grid>

            <Row><Toolbar><ToolbarTitle>12 Columns</ToolbarTitle></Toolbar></Row>
            <Grid columns={12}>{generateItems(25)}</Grid>
        </div>
    );
}

export default GridFragment;
