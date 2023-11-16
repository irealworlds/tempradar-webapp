import { animate, keyframes, style, transition, trigger } from "@angular/animations";

export const notificationAnimation = trigger('notificationAnimation', [
    transition(':enter', [
      style({ transform: 'translateY(2px)', opacity: 0 }),
      animate('300ms ease-out',
        keyframes([
          style({ transform: 'translateY(2px)', opacity: 0, offset: 0 }),
          style({ transform: 'translateX(2px)', opacity: 0, offset: 0.5 }),
          style({ transform: 'translateY(0)', opacity: 1, offset: 1.0 }),
        ])
      )
    ]),

    transition(':leave', [
      style({ opacity: 1 }),
      animate('100ms ease-in', style({ opacity: 0 }))
    ])
  ]);
