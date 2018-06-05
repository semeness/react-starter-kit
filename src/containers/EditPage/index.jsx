import Base from 'containers/Base/index';
import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {editUser} from 'redux/actions/user-list';
import {getOneUserSelector} from 'redux/selectors/oneUser';
import ButtonComponent from 'components/Button/index';


/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(state, props) {
    return {
        oneUser: getOneUserSelector(state, props.match.params.id),
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
        editUser,
    }, dispatch);
}

class EditPageContainer extends Base {
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
            nameInput: this.props.oneUser.name,
            surnameInput: this.props.oneUser.surname,
            ageInput: this.props.oneUser.age,

        };
    }

    onClickSumbit = () => {
        this.props.editUser(this.props.match.params.id, this.state.nameInput, this.state.surnameInput, this.state.ageInput);
        alert("Are You Sure?");
        this.props.history.push('/user-page');
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
        const {userList} = this.props;
        return (
            <div>
                <span>Name</span>
                <input type="text" value={this.state.nameInput} onChange={this.handleNameChange}/>

                <span>Surname</span>
                <input type="text" value={this.state.surnameInput} onChange={this.handleSurnameChange}/>

                <span>Age</span>
                <input type="text" value={this.state.ageInput} onChange={this.handleAgeChange}/>

                <span>Gender</span>
                <div>
                    <input type="radio" name="gender" value="male" id="Male"/>
                    <label htmlFor="Male">Male</label>

                    <input type="radio" name="gender" value="female" id="Female"/>
                    <label htmlFor="Female">Female</label>
                </div>

                <ButtonComponent text="sumbit" data={userList} onClick={this.onClickSumbit}/>
            </div>
        );
    }

    handleNameChange = (e) => {
        this.setState({
            nameInput: e.target.value,
        });
    };

    handleSurnameChange = (e) => {
        this.setState({
            surnameInput: e.target.value,
        });
    };

    handleAgeChange = (e) => {
        this.setState({
            ageInput: e.target.value,
        });
    };


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPageContainer));
