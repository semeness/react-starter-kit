import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';

import UserPageContainer from 'containers/UserPage/index';
import EditPage from 'containers/EditPage/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUserList} from 'redux/actions/user-list';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(state/*, props*/) {
    return {};
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserList,
    }, dispatch);
}

class DataLoadContainer extends React.Component{

    /**
     * Компонент примонтировался.
     * В данный момент у нас есть возможность использовать refs, а следовательно это то самое место, где мы хотели бы указать установку фокуса.
     * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
     */
    componentDidMount() {
        console.log("DataLoaded");
        this.props.getUserList();
    }

    render() {
        return (
            <Switch>
                <Route exact path="/user-page/:id/edit" component={EditPage}/>
                <Route exact path="/user-page" component={UserPageContainer} />
            </Switch>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DataLoadContainer));

