import Base from 'containers/Base/index';
import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {editUser} from 'redux/actions/user-list';
import {getOneUserSelector} from 'redux/selectors/oneUser';
import ButtonComponent from 'components/Button/index';
import RadioButtonGender from 'components/RadioButton/index';
import style from './style.less';


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
            name: this.props.oneUser.name,
            surname: this.props.oneUser.surname,
            age: this.props.oneUser.age,
            gender:this.props.oneUser.gender,
            activity:this.props.oneUser.isActive,
            education:this.props.oneUser.education,

        };
    }

    onClickSumbit = () => {
        const {name, surname, age, gender, activity, education} = this.state;
        const user = {
            id:this.props.match.params.id,
            name,
            surname,
            age,
            gender,
            activity,
            education
        };
        this.props.editUser(user);
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
        const {name, surname, age, gender} = this.state;
        return (
            <div className="editPageContainer">

                <div>
                    <span>Name</span>
                    <input name="name" type="text" value={name} onChange={this.handleFieldChange}/>
                </div>

                <div>
                    <span>Surname</span>
                    <input name="surname" type="text" value={surname} onChange={this.handleFieldChange}/>
                </div>

                <div>
                    <span>Age</span>
                    <input name="age" type="text" value={age} onChange={this.handleFieldChange}/>
                </div>

                <div>
                    <span>Gender</span>
                    <RadioButtonGender info={this.genderEditInfo} gender={gender} handler={this.handleGenderChange}/>
                </div>

                <div>
                    <span>Activity</span>
                    {this.renderCheckBox()}
                </div>

                <div>
                    <span>Education</span>
                    {this.renderSelect()}
                </div>

                <div>
                <ButtonComponent text="sumbit" onClick={this.onClickSumbit}/>
                </div>
            </div>
        );

    }

    handleFieldChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    };


    handleGenderChange = (e) => {
        const rbValue = e.target.value;
        this.setState({
            gender: rbValue,
        });
    };

    handleActivityChange = (e) => {
        this.setState({
            activity: e.target.checked,
        });
    };

    handleEducationChange = (e) => {
        this.setState({
            education: e.target.selectedIndex,
        });
    }


    genderEditInfo = [
        {
            id: "Male",
            value: "male",
            name: "gender",
        },
        {
          id: "Female",
          value: "female",
          name: 'gender',
        },
    ];

    renderCheckBox() {
        const {activity} = this.state;
            return(
                <input type="checkbox" checked={activity} onChange={this.handleActivityChange}/>
            );
    }

    renderSelect() {
        const {education} = this.state;
            return(
                <select defaultValue={education} onChange={this.handleEducationChange}>
                    <option value="0">Stupid</option>
                    <option value="1">Can smth</option>
                    <option value="2">Can smth cpecial</option>
                    <option value="3">Very good</option>
                    <option value="4">Genious</option>
                </select>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPageContainer));
