import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/stackflow/stackflow';

const SmallTalk: ActivityComponentType = ({ params }) => {
  const { push } = useFlow();

  const onClick = () => {
    push('SmallTalk2', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={onClick}>빈칸 내꺼 입력하기</button>
      </div>
    </AppScreen>
  );
};

export default SmallTalk;
