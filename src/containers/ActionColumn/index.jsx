import Button from 'components/Button';
import Base from 'containers/Base/index';
import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {exampleActionListGet, exampleActionSimple} from 'redux/actions/example';
import {deleteUser,editUser} from 'redux/actions/user-list';
import {getUserDataListSelector} from 'redux/selectors/user-list';
import ButtonComponent from 'components/Button/index';


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
        deleteUser,
        editUser,
    }, dispatch);
}



class ActionColumn extends Base {
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

    onClickDelete = () => {
        alert("Are You Sure?");
        const {deleteUser} = this.props;
        return deleteUser(this.props.data.id);
    };

    onClickEdit = () => {
        this.props.history.push('/user-page/'+this.props.data.id+"/edit")
    };

    /**
     * Компонент будет примонтирован.
     * В данный момент у нас нет возможности посмотреть DOM элементы.
     */

    // componentWillMount() {}

    /**
     * Компонент примонтировался.
     * В данный момент у нас есть возможность использовать refs, а следовательно это то самое место, где мы хотели бы указать установку фокуса.
     * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
     */
    componentDidMount() {

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
        return <div>
        <ButtonComponent text="edit" onClick={this.onClickEdit}/>
        <ButtonComponent text="delete" onClick={this.onClickDelete} />
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActionColumn));
