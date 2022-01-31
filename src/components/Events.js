import React from 'react';

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