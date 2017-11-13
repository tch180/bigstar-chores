import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components'

const Parentstyle = styled.div`
background: green;
`


class Parents extends Component {
    render() {
        return (<div>
            <Parentstyle>
            <div>
    <AppBar
    title="Parents"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
            </div>
            </Parentstyle>
            </div>
        );
    }
}

export default Parents;