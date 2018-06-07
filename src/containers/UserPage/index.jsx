import Base from 'containers/Base/index';
import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {exampleActionListGet, exampleActionSimple} from 'redux/actions/example';
import {getUserList} from 'redux/actions/user-list';
import {getUserDataListSelector} from 'redux/selectors/user-list';
import ActionColumn from 'containers/ActionColumn/index';
import style from './style.less';


/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(state/*, props*/) {
    return {
        userList: getUserDataListSelector(state),
    };
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

class UserPageContainer extends Base {
    /**
     * Описание свойств.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    // static propTypes = {prop: PropTypes.bool};

    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    // static defaultProps = {prop: false};

    /**
     * Конструктор компонента
     *
     * @param props - Свойства переданые в компонент.
     * @param context - Контекст.
     * @param updater
     */

    // constructor(props, context, updater) {}

    renderRow = (user) => {
        return <tr key={user.id}>
            {this.renderName(user)}
            {this.renderSurName(user)}
            {this.renderAge(user)}
            {this.renderGender(user)}
            {this.renderActivity(user)}
            {this.renderEducation(user)}
            {this.renderActionColumn(user)}
        </tr>;
    };

    /**
     * Инициализация БЭМ-классов компонента.
     *
     * @param props - Свойства переданые в компонент.
     */
    initBem(props) {
        super.initBem(props);
    }

    /**
     * Инициализация данных компонента.
     *
     * @param props - Свойства переданые в компонент.
     */
    initData(props) {
        super.initData(props);
    }

    /**
     * Компонент будет примонтирован.
     * В данный момент у нас нет возможности посмотреть DOM элементы.
     */

    // componentWillMount() {}

    /**
     * Инициализация состояния компонента.
     *
     * @param props - Свойства переданые в компонент.
     */
    initState(props) {
        super.initState(props);
        this.state = {
            ...this.state,
        };
    }

    /**
     * Компонент получает новые props.
     * Этод метод не вызывается в момент первого render.
     *
     * @param nextProps - Новые свойства
     */
    // componentWillReceiveProps(nextProps) {}

    /**
     * Должен ли компонент обновиться?
     * На самом деле, обычно реакт сам отлично разбирается.
     * Но иногда ручное управление позволяет существенно ускорить работу в "узких местах".
     *
     * @param nextProps - Новые свойства.
     * @param nextState - Новое состояние.
     *
     * @return bool
     */
    // shouldComponentUpdate(nextProps, nextState) {}

    /**
     * Вызывается прямо перед render, когда новые props и state получены.
     * В этом методе нельзя вызывать setState.
     *
     * @param nextProps - Новые свойства.
     * @param nextState - Новое состояние.
     */

    // componentWillUpdate(nextProps, nextState) {}

    /**
     * Отображение компонента
     */
    render() {
        const userList = this.props.userList;
        return (
            <table style={{border: '2px solid black'}}>
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>IsActive</td>
                    <td>Education</td>
                    <td>Edit</td>
                </tr>
                {userList.map(this.renderRow)}
                </tbody>
            </table>
        );
    }

    /**
     * Компонент примонтировался.
     * В данный момент у нас есть возможность использовать refs, а следовательно это то самое место, где мы хотели бы указать установку фокуса.
     * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
     */
    componentDidMount() {
        // this.props.getUserList();
    }

    renderName(user) {
        return (
            <td>{user.name}</td>
        );
    }

    renderSurName(user) {
        return (
            <td>{user.surname}</td>
        );
    }

    renderAge(user) {
        return (
            <td>{user.age}</td>
        );
    }

    renderGender(user) {
        return (
            <td>{user.gender}</td>
        );
    }

    renderActivity(user) {
        if (user.isActive)
            return(
                <td>Active</td>
            );
        else
            return(
                <td>Died</td>
            );
    }

    renderEducation(user) {
        switch (user.education){
            case 0:
                return(
                    <td>Stupid</td>
                );

            case 1:
                return(
                    <td>Can smth</td>
                );

            case 2:
                return(
                    <td>Can smth special</td>
                );

            case 3:
                return(
                    <td>Very Good</td>
                );

            case 4:
                return(
                    <td>Genious</td>
                );
        }
    }

    renderActionColumn(user) {
        return (
            <td><ActionColumn data={user}/></td>
        );
    }

    /**
     * Вызывается сразу после render.
     * Не вызывается в момент первого render'а компонента.
     *
     * @param prevProps - Предыдущие свойства.
     * @param prevState - Предыдущее состояние.
     */
    // componentDidUpdate(prevProps, prevState) {}

    /**
     * Вызывается сразу перед тем, как компонент будет удален из DOM.
     */
    // componentWillUnmount() {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPageContainer));

