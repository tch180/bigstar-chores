import React, { Component } from 'react';
import axios from 'axios';
import {Card,CardActions,CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";


class rewards extends Component {
state = {
    rewards: [],
}

componentDidMount() {
    this.getRewards()
}



getRewards = async () => {
    try {
        console.log(' Getting Rewards Boss')
        const res = await axios.get('http://api.walmartlabs.com/v1/trends?format=json&apiKey=umasvcx84t55nu3qyt7jy849')
        this.setState({rewards: res.data});
        console.log(this.state.rewards);
    } catch (error){
        console.log(error)
    }
}

// umasvcx84t55nu3qyt7jy849 walmart api key



    render() {
        return (
            <div>
                {this.state.rewards.map((reward, index) => {
                    return (
                        <Card key={index}>
                        <CardHeader
                        Title={reward.name}
                        subtitle={reward.itemId}
                        avatar={reward.thumbnailImage}
                        />
                        <CardMedia
                        overlay={
                            <CardTitle
                            title={reward.name}
                            subtitle={reward.upc}
                        />
                        }
                        >
                        <img src={reward.mediumImage} alt=""/>
                        </CardMedia>
                        <CardTitle title={reward.name}/>
                        <CardText>{reward.longDescription}</CardText>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default rewards;