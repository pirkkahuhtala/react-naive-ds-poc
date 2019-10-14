const grid = (breakpoints, gutter) => {
  const gutterTotal = `calc(${gutter} * 2)`;
  return `
  .container-fluid,
  .container {
    margin-right: auto;
    margin-left: auto;
  }

  .container-fluid {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .row {
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: calc(${gutter} * -1);
    margin-left: calc(${gutter} * -1);
  }

  .row.reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .col.reverse {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }

  .col-base,
  .col-base-1,
  .col-base-2,
  .col-base-3,
  .col-base-4,
  .col-base-5,
  .col-base-6,
  .col-base-7,
  .col-base-8,
  .col-base-9,
  .col-base-10,
  .col-base-11,
  .col-base-12,
  .col-base-offset-0,
  .col-base-offset-1,
  .col-base-offset-2,
  .col-base-offset-3,
  .col-base-offset-4,
  .col-base-offset-5,
  .col-base-offset-6,
  .col-base-offset-7,
  .col-base-offset-8,
  .col-base-offset-9,
  .col-base-offset-10,
  .col-base-offset-11,
  .col-base-offset-12 {
    box-sizing: border-box;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: ${gutter};
    padding-left: ${gutter};
  }

  .col-base {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-base-1 {
    -ms-flex-preferred-size: 8.33333333%;
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }

  .col-base-2 {
    -ms-flex-preferred-size: 16.66666667%;
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }

  .col-base-3 {
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }

  .col-base-4 {
    -ms-flex-preferred-size: 33.33333333%;
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }

  .col-base-5 {
    -ms-flex-preferred-size: 41.66666667%;
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }

  .col-base-6 {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }

  .col-base-7 {
    -ms-flex-preferred-size: 58.33333333%;
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }

  .col-base-8 {
    -ms-flex-preferred-size: 66.66666667%;
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }

  .col-base-9 {
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }

  .col-base-10 {
    -ms-flex-preferred-size: 83.33333333%;
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }

  .col-base-11 {
    -ms-flex-preferred-size: 91.66666667%;
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }

  .col-base-12 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }

  .col-base-offset-0 {
    margin-left: 0;
  }

  .col-base-offset-1 {
    margin-left: 8.33333333%;
  }

  .col-base-offset-2 {
    margin-left: 16.66666667%;
  }

  .col-base-offset-3 {
    margin-left: 25%;
  }

  .col-base-offset-4 {
    margin-left: 33.33333333%;
  }

  .col-base-offset-5 {
    margin-left: 41.66666667%;
  }

  .col-base-offset-6 {
    margin-left: 50%;
  }

  .col-base-offset-7 {
    margin-left: 58.33333333%;
  }

  .col-base-offset-8 {
    margin-left: 66.66666667%;
  }

  .col-base-offset-9 {
    margin-left: 75%;
  }

  .col-base-offset-10 {
    margin-left: 83.33333333%;
  }

  .col-base-offset-11 {
    margin-left: 91.66666667%;
  }

  .start-base {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    text-align: start;
  }

  .center-base {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
  }

  .end-base {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    text-align: end;
  }

  .top-base {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .middle-base {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .bottom-base {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }

  .around-base {
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }

  .between-base {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .first-base {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
  }

  .last-base {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }

  @media only screen and (min-width: ${breakpoints.xxs}) {
    .container {
      width: calc(${breakpoints.xxs} + ${gutterTotal});
    }

    .col-xxs,
    .col-xxs-1,
    .col-xxs-2,
    .col-xxs-3,
    .col-xxs-4,
    .col-xxs-5,
    .col-xxs-6,
    .col-xxs-7,
    .col-xxs-8,
    .col-xxs-9,
    .col-xxs-10,
    .col-xxs-11,
    .col-xxs-12,
    .col-xxs-offset-0,
    .col-xxs-offset-1,
    .col-xxs-offset-2,
    .col-xxs-offset-3,
    .col-xxs-offset-4,
    .col-xxs-offset-5,
    .col-xxs-offset-6,
    .col-xxs-offset-7,
    .col-xxs-offset-8,
    .col-xxs-offset-9,
    .col-xxs-offset-10,
    .col-xxs-offset-11,
    .col-xxs-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: ${gutter};
      padding-left: ${gutter};
    }

    .col-xxs {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-xxs-1 {
      -ms-flex-preferred-size: 8.33333333%;
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-xxs-2 {
      -ms-flex-preferred-size: 16.66666667%;
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-xxs-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-xxs-4 {
      -ms-flex-preferred-size: 33.33333333%;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-xxs-5 {
      -ms-flex-preferred-size: 41.66666667%;
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-xxs-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-xxs-7 {
      -ms-flex-preferred-size: 58.33333333%;
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-xxs-8 {
      -ms-flex-preferred-size: 66.66666667%;
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-xxs-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-xxs-10 {
      -ms-flex-preferred-size: 83.33333333%;
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-xxs-11 {
      -ms-flex-preferred-size: 91.66666667%;
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-xxs-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-xxs-offset-0 {
      margin-left: 0;
    }

    .col-xxs-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-xxs-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-xxs-offset-3 {
      margin-left: 25%;
    }

    .col-xxs-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-xxs-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-xxs-offset-6 {
      margin-left: 50%;
    }

    .col-xxs-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-xxs-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-xxs-offset-9 {
      margin-left: 75%;
    }

    .col-xxs-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-xxs-offset-11 {
      margin-left: 91.66666667%;
    }

    .start-xxs {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }

    .center-xxs {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }

    .end-xxs {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }

    .top-xxs {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-xxs {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-xxs {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-xxs {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-xxs {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-xxs {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-xxs {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  @media only screen and (min-width: ${breakpoints.xs}) {
    .container {
      width: calc(${breakpoints.xs} + ${gutterTotal});
    }

    .col-xs,
    .col-xs-1,
    .col-xs-2,
    .col-xs-3,
    .col-xs-4,
    .col-xs-5,
    .col-xs-6,
    .col-xs-7,
    .col-xs-8,
    .col-xs-9,
    .col-xs-10,
    .col-xs-11,
    .col-xs-12,
    .col-xs-offset-0,
    .col-xs-offset-1,
    .col-xs-offset-2,
    .col-xs-offset-3,
    .col-xs-offset-4,
    .col-xs-offset-5,
    .col-xs-offset-6,
    .col-xs-offset-7,
    .col-xs-offset-8,
    .col-xs-offset-9,
    .col-xs-offset-10,
    .col-xs-offset-11,
    .col-xs-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: ${gutter};
      padding-left: ${gutter};
    }

    .col-xs {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-xs-1 {
      -ms-flex-preferred-size: 8.33333333%;
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-xs-2 {
      -ms-flex-preferred-size: 16.66666667%;
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-xs-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-xs-4 {
      -ms-flex-preferred-size: 33.33333333%;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-xs-5 {
      -ms-flex-preferred-size: 41.66666667%;
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-xs-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-xs-7 {
      -ms-flex-preferred-size: 58.33333333%;
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-xs-8 {
      -ms-flex-preferred-size: 66.66666667%;
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-xs-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-xs-10 {
      -ms-flex-preferred-size: 83.33333333%;
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-xs-11 {
      -ms-flex-preferred-size: 91.66666667%;
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-xs-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-xs-offset-0 {
      margin-left: 0;
    }

    .col-xs-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-xs-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-xs-offset-3 {
      margin-left: 25%;
    }

    .col-xs-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-xs-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-xs-offset-6 {
      margin-left: 50%;
    }

    .col-xs-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-xs-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-xs-offset-9 {
      margin-left: 75%;
    }

    .col-xs-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-xs-offset-11 {
      margin-left: 91.66666667%;
    }

    .start-xs {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }

    .center-xs {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }

    .end-xs {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }

    .top-xs {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-xs {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-xs {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-xs {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-xs {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-xs {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-xs {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  @media only screen and (min-width: ${breakpoints.sm}) {
    .container {
      width: calc(${breakpoints.sm} + ${gutterTotal});
    }

    .col-sm,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-offset-0,
    .col-sm-offset-1,
    .col-sm-offset-2,
    .col-sm-offset-3,
    .col-sm-offset-4,
    .col-sm-offset-5,
    .col-sm-offset-6,
    .col-sm-offset-7,
    .col-sm-offset-8,
    .col-sm-offset-9,
    .col-sm-offset-10,
    .col-sm-offset-11,
    .col-sm-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: ${gutter};
      padding-left: ${gutter};
    }

    .col-sm {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-sm-1 {
      -ms-flex-preferred-size: 8.33333333%;
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-sm-2 {
      -ms-flex-preferred-size: 16.66666667%;
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-sm-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-sm-4 {
      -ms-flex-preferred-size: 33.33333333%;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-sm-5 {
      -ms-flex-preferred-size: 41.66666667%;
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-sm-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-sm-7 {
      -ms-flex-preferred-size: 58.33333333%;
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-sm-8 {
      -ms-flex-preferred-size: 66.66666667%;
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-sm-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-sm-10 {
      -ms-flex-preferred-size: 83.33333333%;
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-sm-11 {
      -ms-flex-preferred-size: 91.66666667%;
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-sm-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-sm-offset-0 {
      margin-left: 0;
    }

    .col-sm-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-sm-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-sm-offset-3 {
      margin-left: 25%;
    }

    .col-sm-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-sm-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-sm-offset-6 {
      margin-left: 50%;
    }

    .col-sm-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-sm-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-sm-offset-9 {
      margin-left: 75%;
    }

    .col-sm-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-sm-offset-11 {
      margin-left: 91.66666667%;
    }

    .start-sm {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }

    .center-sm {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }

    .end-sm {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }

    .top-sm {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-sm {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-sm {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-sm {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-sm {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-sm {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-sm {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    .container {
      width: calc(${breakpoints.md} + ${gutterTotal});
    }

    .col-md,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-offset-0,
    .col-md-offset-1,
    .col-md-offset-2,
    .col-md-offset-3,
    .col-md-offset-4,
    .col-md-offset-5,
    .col-md-offset-6,
    .col-md-offset-7,
    .col-md-offset-8,
    .col-md-offset-9,
    .col-md-offset-10,
    .col-md-offset-11,
    .col-md-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: ${gutter};
      padding-left: ${gutter};
    }

    .col-md {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-md-1 {
      -ms-flex-preferred-size: 8.33333333%;
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-md-2 {
      -ms-flex-preferred-size: 16.66666667%;
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-md-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-md-4 {
      -ms-flex-preferred-size: 33.33333333%;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-md-5 {
      -ms-flex-preferred-size: 41.66666667%;
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-md-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-md-7 {
      -ms-flex-preferred-size: 58.33333333%;
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-md-8 {
      -ms-flex-preferred-size: 66.66666667%;
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-md-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-md-10 {
      -ms-flex-preferred-size: 83.33333333%;
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-md-11 {
      -ms-flex-preferred-size: 91.66666667%;
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-md-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-md-offset-0 {
      margin-left: 0;
    }

    .col-md-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-md-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-md-offset-3 {
      margin-left: 25%;
    }

    .col-md-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-md-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-md-offset-6 {
      margin-left: 50%;
    }

    .col-md-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-md-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-md-offset-9 {
      margin-left: 75%;
    }

    .col-md-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-md-offset-11 {
      margin-left: 91.66666667%;
    }

    .start-md {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }

    .center-md {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }

    .end-md {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }

    .top-md {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-md {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-md {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-md {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-md {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-md {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-md {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    .container {
      width: calc(${breakpoints.lg} + ${gutterTotal});
    }

    .col-lg,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-offset-0,
    .col-lg-offset-1,
    .col-lg-offset-2,
    .col-lg-offset-3,
    .col-lg-offset-4,
    .col-lg-offset-5,
    .col-lg-offset-6,
    .col-lg-offset-7,
    .col-lg-offset-8,
    .col-lg-offset-9,
    .col-lg-offset-10,
    .col-lg-offset-11,
    .col-lg-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: ${gutter};
      padding-left: ${gutter};
    }

    .col-lg {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-lg-1 {
      -ms-flex-preferred-size: 8.33333333%;
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-lg-2 {
      -ms-flex-preferred-size: 16.66666667%;
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-lg-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-lg-4 {
      -ms-flex-preferred-size: 33.33333333%;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-lg-5 {
      -ms-flex-preferred-size: 41.66666667%;
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-lg-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-lg-7 {
      -ms-flex-preferred-size: 58.33333333%;
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-lg-8 {
      -ms-flex-preferred-size: 66.66666667%;
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-lg-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-lg-10 {
      -ms-flex-preferred-size: 83.33333333%;
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-lg-11 {
      -ms-flex-preferred-size: 91.66666667%;
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-lg-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-lg-offset-0 {
      margin-left: 0;
    }

    .col-lg-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-lg-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-lg-offset-3 {
      margin-left: 25%;
    }

    .col-lg-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-lg-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-lg-offset-6 {
      margin-left: 50%;
    }

    .col-lg-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-lg-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-lg-offset-9 {
      margin-left: 75%;
    }

    .col-lg-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-lg-offset-11 {
      margin-left: 91.66666667%;
    }

    .start-lg {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }

    .center-lg {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }

    .end-lg {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }

    .top-lg {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-lg {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-lg {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-lg {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-lg {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-lg {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-lg {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }
`;
};

export default grid;
