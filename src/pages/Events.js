import React from 'react';
import Toggle from '../components/Toggle'

function Events() {
    return (
        <div className="content-block">
            <h2 className="content-title">Обработка событий</h2>
            <div className="text-block">
                <p>События в React именуются в стиле camelCase вместо нижнего регистра.</p>
                <p>С JSX вы передаёте функцию как обработчик события вместо строки.</p>
                <p>Популярные обработчики событий: onClick, onChange</p>
                <p>Существует множество поддерживаемых событий, вот общий список:
                    <ul>
                        <li>Буфер обмена: onCopy, onCut, onPaste</li>
                        <li>Составление/ввод данных: onCompositionEnd, onCompositionStart, onCompositionUpdate</li>
                        <li>Клавиатура: onKeyDown, onKeyPress, onKeyUp</li>
                        <li>Фокусировка: onFocus, onBlur</li>
                        <li>Форма: onChange, onInput, onSubmit</li>
                        <li>Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseOver, onMouseUp</li>
                        <li>Выделение: onSelect</li>
                        <li>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</li>
                        <li>UI: onScroll</li>
                        <li>Колёсико мышки: onWheel</li>
                        <li>Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange, onEmptied, onEncrypted, onEnded, onError, onLoadedData, onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying, onProgress, onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate, onVolumeChange, onWaiting</li>
                        <li>Изображение: onLoad, onError</li>
                        <li>Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration</li>
                        <li>Переход: onTransitionEnd</li>
                    </ul>
                </p>
            </div>
            <div className="code-block">
                <pre><code>{`
            <button onClick={activateLasers}>
            Активировать лазеры
            </button>
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>В React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault. </p>
            </div>
            <div className="code-block">
                <pre><code>{`
            function Form() {
                function handleSubmit(e) {
                  e.preventDefault();
                  console.log('Отправлена форма.');
                }
                return (
                  <form onSubmit={handleSubmit}>
                    <button type="submit">Отправить</button>
                  </form>
                );
            }
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>В компоненте, определённом с помощью ES6-класса, в качестве обработчика события обычно выступает один из методов класса. Например, этот компонент Toggle рендерит кнопку, которая позволяет пользователю переключать состояния между «Включено» и «Выключено»:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            class Toggle extends React.Component {
                constructor(props) {
                  super(props);
                  this.state = {isToggleOn: true};
              
                  // Эта привязка обязательна для работы 'this' в колбэке.
                    this.handleClick = this.handleClick.bind(this);
                }

                handleClick() {
                    this.setState(prevState => ({
                        isToggleOn: !prevState.isToggleOn
                    }));
                }

                render() {
                    return (
                        <button className={'toggle__btn'} onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'Включено' : 'Выключено'}
                        </button>
                    );
                }
            }

                    ReactDOM.render(
                    <Toggle />,
                    document.getElementById('root')
                    );
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>Результат кода:</p>
                <Toggle />
                <div className="text-block">
                    <p>Этот же код, но переписанный на функциональную компоненту:</p>
                </div>
                <div className="code-block">
                    <pre><code>{`
            function Toggle() {
                let [isToggleOn, setIsToggleOn] = useState(true);
                function handleClick() {
                  setIsToggleOn(!isToggleOn)
                }
                return (
                  <button className={'toggle__btn'} onClick={() => handleClick()}>
                    {isToggleOn ? 'Включено' : 'Выключено'}
                  </button>
                );
              }
        `}</code></pre>
                </div >

                <p>Внутри цикла часто нужно передать дополнительный аргумент в обработчик события. Например, если id — это идентификатор строки, можно использовать следующий вариант:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            <button onClick={(e) => deleteRow(id, e)}>Удалить строку</button>
        `}</code></pre>
            </div >

        </div>
    );
}

export default Events;