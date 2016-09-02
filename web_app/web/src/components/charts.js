/**
 * Created by quikr on 9/1/16.
 */
import React from 'react';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

var App = React.createClass({
  getInitialState: function () {
    return {
      data: [],
      series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
      labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
      colors: ['#58CF6C', '#000000', '#58CF6C', '#58CF6C', '#58CF6C']
    }
  },
  componentDidMount: function () {
    this.populateArray();
    setInterval(()=>{
      this.populateArrays();
    },500);

  },
  populateArray: function () {
    var data = [],
      series = 1,//getRandomInt(2, 10),
      serieLength = 45;//getRandomInt(2, 10);

    for (var i = series; i--; ) {
      var tmp = [];

      for (var j = serieLength; j--; ) {
        tmp.push(j+2);
      }


      data.push(tmp);
    }

    this.setState({ data: data });
  },populateArrays: function () {
    var data = [],
      series = 1,//getRandomInt(2, 10),
      serieLength = 45;//getRandomInt(2, 10);

    for (var i = series; i--; ) {
      var tmp = [];

      for (var j = serieLength; j--; ) {
        if((j>0 && j<5))
        tmp.push(getRandomInt(0,5));
          else if((j>5 && j<10))
          tmp.push(getRandomInt(4,10));
else        if((j>10 && j<15))
          tmp.push(getRandomInt(9,20));
        else if((j>15 && j<=20))
          tmp.push(getRandomInt(0,8));
        if((j>0 && j<5))
          tmp.push(getRandomInt(0,5));
        else if((j>5 && j<10))
          tmp.push(getRandomInt(4,10));
        else        if((j>10 && j<15))
          tmp.push(getRandomInt(9,20));
        else if((j>15 && j<=20))
          tmp.push(getRandomInt(0,8));
        if((j>0 && j<5))
          tmp.push(getRandomInt(0,5));
        else if((j>5 && j<10))
          tmp.push(getRandomInt(4,10));
        else        if((j>10 && j<15))
          tmp.push(getRandomInt(9,20));
        else if((j>15 && j<=20))
          tmp.push(getRandomInt(0,8));
        if((j>0 && j<5))
          tmp.push(getRandomInt(0,5));
        else if((j>20 && j<25))
          tmp.push(getRandomInt(4,10));
        else        if((j>25 && j<30))
          tmp.push(getRandomInt(9,20));
        else if((j>35 && j<=40))
          tmp.push(getRandomInt(4,8));
        if((j>30 && j<35))
          tmp.push(getRandomInt(2,5));
        else if((j>40 && j<40))
          tmp.push(getRandomInt(4,15));
        else        if((j>10 && j<15))
          tmp.push(getRandomInt(9,20));
        else if((j>15 && j<=20))
          tmp.push(getRandomInt(0,8));




      }


      data.push(tmp);
    }

    this.setState({ data: data });
  },
  render: function () {
    return (
      <section>
        <button type="button" onClick={this.populateArrays}>Search</button>
        <Charts
          data={ this.state.data }
          labels={ this.state.series }
          colors={ this.state.colors }

          height={ 250 }
        />

         </section>
    );
  }
});



var Legend = React.createClass({
  render: function () {
    var labels = this.props.labels,
      colors = this.props.colors;

    return (
      <div className="Legend">
        { labels.map(function(label, labelIndex) {
          return (
            <div>
              <span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
              <span className="Legend--label">{ label }</span>
            </div>
          );
        }) }
      </div>
    );
  }
});

var Charts = React.createClass({
  render: function () {
    var self = this,
      data = this.props.data,
      layered = this.props.grouping === 'layered' ? true : false,
      stacked = this.props.grouping === 'stacked' ? true : false,
      opaque = this.props.opaque,
      max = 0;

    for (var i = data.length; i--; ) {
      for (var j = data[i].length; j--; ) {
        if (data[i][j] > max) {
          max = data[i][j];
        }
      }
    }


    return (
      <div className={ 'Charts' + (this.props.horizontal ? ' horizontal' : '' )} style={{background: 'url("/public/back2.jpg")'}}>
        { data.map(function (serie, serieIndex) {
          var sortedSerie = serie.slice(0),
            sum;

          sum = serie.reduce(function (carry, current) {
            return carry + current;
          }, 0);
          sortedSerie.sort(compareNumbers);

          return (
            <div className={ 'Charts--serie ' + (self.props.grouping) }
                 key={ serieIndex }
                 style={{ height: self.props.height ? self.props.height: 'auto' }}
            >
              <label>{ self.props.labels[serieIndex] }</label>
              { serie.map(function (item, itemIndex) {
                var color = self.props.colors[itemIndex], style,
                  size = item / (stacked ? sum : max) * 100;

                style = {
                  backgroundColor: color,
                  opacity: opaque ? 1 : (item/max + .05),
                  zIndex: item
                };

                if (self.props.horizontal) {
                  style['width'] = size + '%';
                } else {
                  style['height'] = size + '%';
                }

                if (layered && !self.props.horizontal) {
                  //console.log(sortedSerie, serie, sortedSerie.indexOf(item));
                  style['right'] = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
                  // style['left'] = (itemIndex * 10) + '%';
                }

                return (
                  <div
                    className={ 'Charts--item ' + (self.props.grouping) }
                    style={ style }
                    key={ itemIndex }
                  >
                    <b style={{ color: color }}>{ item }</b>
                  </div>
                );
              }) }
            </div>
          );
        }) }
      </div>
    );
  }
});

 export default App;
