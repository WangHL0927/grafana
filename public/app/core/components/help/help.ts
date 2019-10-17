import coreModule from '../../core_module';
import appEvents from 'app/core/app_events';

export class HelpCtrl {
  tabIndex: any;
  shortcuts: any;

  /** @ngInject */
  constructor() {
    this.tabIndex = 0;
    this.shortcuts = {
      全局: [
        { keys: ['g', 'h'], description: '返回主仪表板' },
        { keys: ['g', 'p'], description: '转到个人配置' },
        { keys: ['s', 'o'], description: '打开搜索' },
        { keys: ['esc'], description: '退出编辑/设置视图' },
      ],
      仪表板: [
        { keys: ['mod+s'], description: '保存仪表板' },
        { keys: ['d', 'r'], description: '刷新所有面板' },
        { keys: ['d', 's'], description: '仪表板设置' },
        { keys: ['d', 'v'], description: '切换 in-active / view 模式' },
        { keys: ['d', 'k'], description: '切换 kiosk 模式（隐藏顶部导航）' },
        { keys: ['d', 'E'], description: '展开全部行组' },
        { keys: ['d', 'C'], description: '折叠全部行组' },
        { keys: ['d', 'a'], description: '切换 auto fit panels（试验性功能）' },
        { keys: ['mod+o'], description: '切换 shared graph crosshair' },
        { keys: ['d', 'l'], description: '切换所有面板图例' },
      ],
      当前面板: [
        { keys: ['e'], description: '切换至面板编辑视图' },
        { keys: ['v'], description: '切换至面板全屏视图' },
        { keys: ['p', 's'], description: '打开当前面板分享对话框' },
        { keys: ['p', 'd'], description: '创建当前面板副本' },
        { keys: ['p', 'r'], description: '移除当前面板' },
        { keys: ['p', 'l'], description: '切换当前面板图例' },
      ],
      时间区间: [
        { keys: ['t', 'z'], description: '缩小时间范围' },
        {
          keys: ['t', '<i class="fa fa-long-arrow-left"></i>'],
          description: '左移时间区间',
        },
        {
          keys: ['t', '<i class="fa fa-long-arrow-right"></i>'],
          description: '右移时间区间',
        },
      ],
    };
  }

  dismiss() {
    appEvents.emit('hide-modal');
  }
}

export function helpModal() {
  return {
    restrict: 'E',
    templateUrl: 'public/app/core/components/help/help.html',
    controller: HelpCtrl,
    bindToController: true,
    transclude: true,
    controllerAs: 'ctrl',
    scope: {},
  };
}

coreModule.directive('helpModal', helpModal);
