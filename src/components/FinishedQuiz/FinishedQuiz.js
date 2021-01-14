import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../UI/Button/Button'
import './FinishedQuiz.css'

function FinishedQuiz(props) {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className="FinishedQuiz">
            <ul>
                {props.quiz.map((quizItem, index) => {

                    const cls = ['fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times error' : 'fa-check success',
                    ]

                    return (
                        <li key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )

                })}

            </ul>
            <p>
                Правильно {successCount} из {props.quiz.length}
            </p>
            <div>
                <Button onClick={props.onRetry}
                    type="primary"
                >Повторить</Button>
                <NavLink
                    to={'/'}
                >
                    <Button
                        type="success"
                    >Перейти в список тестов</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default FinishedQuiz
