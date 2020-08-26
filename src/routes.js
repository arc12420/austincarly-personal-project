import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import Add_Photo from './components/Add_Photo/Add_Photo';
// import Add_Post from './components/Add_Post/Add_Post';
import Authentication from './components/Authentication/Authentication';
// import Home from './components/Home/Home';
// import Photos from './components/Photos/Photos';
// import Post from './components/Post/Post';
import Registration from './components/Registration/Registration';


export default (
    <Switch>
        <Route exact path = '/' component = {Authentication}/>
        <Route path = '/Registration' component = {Registration}/>
        {/* <Route path = '/Add_Photo' component = {Add_Photo}/> */}
        {/* <Route path = '/Add_Post' component = {Add_Post}/> */}
        {/* <Route path = '/Post/:postid' component = {Post}/> */}
        {/* <Route path = '/Home' component = {Home}/> */}
        {/* <Route path = '/Photos/:AlbumName' component = {Photos}/> */}
    </Switch>
)