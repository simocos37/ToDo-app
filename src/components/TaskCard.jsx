// eslint-disable-next-line no-unused-vars
import React from 'react';
import Tag from './Tag';

const TaskCard = () => {
    return (
        <article className='task_card'>
            <p className='task_text'> Sample text</p>

            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    < Tag tagName="HTML" />
                    < Tag tagName="HTML" />
                </div>
                <div className='task_delete'></div>
            </div>
        </article>
    );
};

export default TaskCard;