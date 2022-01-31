import React from 'react';
import './Content-style.css';

function Props() {
    return (
        <div className="content-block">
            <h2 className="content-title">Props</h2>
            <div className="text-block">
                <p>То, что мы называем аргументами в мире функций, в мире компонентов называется свойствами.</p>
                <p>Функциональные компоненты свойства принимают в качестве аргумента.</p>
                <p>Props представляют собой объект, содержащие свойства.</p>
                <p>Обратиться к ним можно - props.имя-свойства.</p>
                <p>Props - только чтения.</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            function Welcome(props) {
                return <h1>Привет, {props.name}</h1>;
            }
            `}</code></pre>
            </div>
            <div className="text-block">
                <p>Классовые компоненты свойства принимают по умолчанию и обратиться к ним можно с помощью this.props.имя-свойства.</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            class Welcome extends React.Component {
                render() {
                    return <h1>Привет, {this.props.name}</h1>;
                }
            }
            `}</code></pre>
            </div>

        </div >
    );
}

export default Props;