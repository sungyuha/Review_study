import React from 'react';

const ManyRendering = ( {onclick} ) => {
    return (
        <div>
            {Array.from({length: 1000}, (_, i) => { // 100개의 아이템 생성
                if(i === 90) {
                    console.log('rendering last item: ', i); // 인덱스 일땐 마지막 랜더링 된 걸 체크
                }
                return (
                    <div key={i} onClick={onclick}> {/* onclick 매소드를 Props로 받음 */}
                        Hello, world!
                    </div>
                );
            })}
        </div>
    );
}

export default ManyRendering;