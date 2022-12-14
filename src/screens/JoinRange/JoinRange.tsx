import { Container } from '@components/Container';
import { Text } from '@components/Text';
import styles from './JoinRange.styles';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { TextInputContainer } from '@components/TextInputContainer';
import { HeadSection } from '@components/HeadSection';
import { Card } from '@components/Card';
import Icon from 'react-native-vector-icons/EvilIcons';

export interface Props {}

const JoinRange = () => {
  return (
    <Container background='dark' defaultPadding={false}>
      <ScrollView>
        <HeadSection
          style={styles.headSection}
          textStyle={styles.backText}
          backText='Back'
        />

        <View style={styles.headerContainer}>
          <Text type={'body-lg'} style={{ color: '#50E5C3', marginTop: 10 }}>
            Lets Get Started!
          </Text>
          <Text type={'heading-1'} style={{ color: 'white', marginBottom: 20 }}>
            Join a Range
          </Text>
          <TextInputContainer
            icon='search'
            colorIcon='white'
            label='Find your range or facility'
          />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.bodyHeaderContainer}>
            <Text type={'heading-2'} style={{ color: 'white', marginTop: 25 }}>
              Near You
            </Text>
            <Text type={'body'} style={{ color: '#9BB1D2' }}>
              Explore and become a member of a range near you
            </Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Icon
                  color={'#50E5C3'}
                  name='location'
                  size={26}
                  style={{ marginBottom: 13 }}
                />
              </View>
              <View>
                <Text
                  type='body-sm'
                  style={{ color: '#50E5C3', marginLeft: 8 }}>
                  Salt Lake City + 7mi
                </Text>
              </View>
            </View>

            <Card
              data={[
                [
                  'Shooting XL',
                  'Facility description nullam enim odio, porttitor eget enim eget, lacinia sollicitudin ipsum. Phasellus quis ante in lacus bibendum aliquam.',
                  'RangeProfile',
                  'data:image/png;base64,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'
                ],
                [
                  'Fire CA',
                  'Facility description nullam enim odio, porttitor eget enim eget, lacinia sollicitudin ipsum. Phasellus quis ante in lacus bibendum aliquam.',
                  'RangeProfile',
                  'data:image/png;base64,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',
                  'RangeProfile'
                ],
                [
                  'Google Maps',
                  `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.`,
                  'RangeProfile',
                  'data:image/png;base64,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',
                  'RangeProfile'
                ],
                [
                  'Fire CA',
                  'Facility description nullam enim odio, porttitor eget enim eget, lacinia sollicitudin ipsum. Phasellus quis ante in lacus bibendum aliquam.',
                  'RangeProfile',
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAc8SURBVHgBrVhbb1VFFP7W4aAgphSQFpCCXCvQlosVY0BjQBP1DR981RgfND4Iv0D9A1bejFeMD75puGi9pN5QygOmQDQqVommggSQIioIp2dcsy+z16w9c3ZBV3LOnpm9Zs23LrNmzSYwmf0DzxjCdm62E3HfAPKZ8Ii2JB5GOkxZL/tX/AkfL8J/blIxtyzfBOdjnB+7aPOOHWQ+Hxjgwe2UvTU5JxVCPaCmaBPkyhmY7L1TvAYhtGCVMkKKhsgpaprP1TGBR8lICaKpgOTvPClCWfLFpHOaBb8hBTCTkQwLId6auYNyQyad2tN100jDw9NICW2tvj8nXyQYWsaXJ+1Fzn2mtCYJ5uzRXqfMInoh8rRQPMo6McVdX1lYAyIPneBF5iUxLX/aUPHcV7KUQTCOiXz3emu3AKrDIO5SNYfEXkiAN8rCQ7NNMxybmkobzXdxWTk9PxBi0ou5werJ5okJUosiwqrTZwJ++vyU8e+T1XMEOlKQjYh56aQ0VMpYvQ6ZiGBlee95651p59Dbzt1U5VmtEBkPk8TmgBulFVocCJUHx8zFQFdXOnC0E7h4yl844mHpMVJKSAPZfi0Bbn+N7Jf1k2wzEfgxD/HT5LxNPY/F99yRJV7b3szj5Oblc0zOP1Fek3RfYbF9Z/EWIR6kUMgkz47lQGdn8W7hAmDOMuDUaJLaXDi12qBCXIyvFOOoABoMmXwTT5kG6u1nqVPECtzuuR04PQZqXMJkSO8ZqLWTrGJdRmoWqaNfZhQE2m7qkh629tzyiw4eW7gGZvSr6kIKkcwFP2nUk3hFOd15ebfQyQcqO1PbgDUMvFZDiabwWE8v6NhR7lyJysvrmVAEaRylUIm5ScguKZTQ2l5g1kxEid+ZpWuAHw779Yqwusto8p21QxPegiYHHrO2TkOJcC3ddqfPBC1fiZZ1Kb+jdeuBX47zoXS+GBZry75rN+EXbtl4zchUplNUM2vLdCT47c9wqqNutnZ7GyppNnukuydNjyItmmxNcjKl/Gy84WOpJ3lXmFBvjFBfWoZmd3D8rkLlLSCnPgb+3TGY86eDYek5U3m3wELW4qakndSY1AFEkqfJqW79BqBtBiZNM6YD/Rud1Slg3Vy+aZTXT7EZ1Nyp1CyfXNJtJuBazLsZWHYLrppWLQW1zfEM5MJSh07klI0e+QhYOo+zxCKGrb2as8QN1+OqyR5K/f32xHKGSNZu+gp4JYYyYi0G1GQ1gdsQTXgeoA4uW/tW4JppLWehjgWQHnfGk2OiPqH82cyyiswsCIRLLjBXBjQV2LQxfNhMlnguWRlU98FPFGtBFHIOY4alZo/35IhX8ZZvDtcXewAr2ForF+E/08oultWdelIYRxsxtzjEr1basZE4p3x8ynXAxj78b2RlNQQwuVEllkahXGJxGSpuV6s0ZGTcXeLO0DAwOsYCJnDNZOdaGR8Ne8BKgPPYV/utOICMqENipZnl4bCmMxeAtz6AWTQftIWzw8K5kz+A7Lk9dhp490s+/k8CN81yH41CNYz3ScQdSGRDxXjukbGtbyIJTyNbZfMG0EWur1/dA+w7AJz9A5VkefYy7yt70k3z0Fa+1v3jh2WLtXPPm6ZJP09kSkB/VtDFjTPJibPAN1wsbbsbOP4rzGdHgG9/ZuvzKbp6STm3T/BqR0aBwYNp/z7OJn18U3p5L18wxgv5Aod33JOqIpOE8hR/85TodDGS9V2dbARLL1/JHnsgHfiCa+1PD/ORPg24n++ca5elTIe4Lhk6BPx1CXTvbcC6FWl9/tI+4MexFBR82d7HJmil0psOmScHDAhejMeo9CXAtrdwqbrtLptY+V55Dvh4JLVud1fK8P1YqoTl6+R4vsIu3n0A5pORqJ1KGKRdU9wcKgJRFejQQmAAaL8R2MphMm828PA9XHhxGOwdTt8//iCwZH56zNuQGRqBOfA1PCP6GL318o53yYa9cyJcxsasXxJsG7s5Q0zjuN7UkwJctTj9aWIlzXsHEwU0YMA3StUNrEYtXoYsEexbS76zn69lY4jSMX63b9gDTfBBasBGPHWY1oxiCF3jEBBWIpvWdr0P/HSi/M6O8TtzueGGqrK+xEICi7O4FiItEVpACpAKJzT+J+f1QeC3c8WEk2dhXhtM3rUKAU9OhOT8WgxwTHAo9j3PnLOn6hCXBpfT3+uDoN8vABVygavzdj1m2RBRoK0VToRzrNObH6YDY2cq94w6MkpgQxjraMFsEzxl4qqyTM7j2iOjpQVjJZCWZSL8koI3gcI6JnjoIAAg58mfWiGj5ksvhMarqB6bQIhbRBNFZMTGEOFDhDcUYi3vXlVCqiyl02tMlg4lE8ChvWjz+DgwOffkfAbhnI8W4GQ7dEJWeU0pM853zuZOTJL0gibbuq2sGtqYpEZMi/lyvZy4HH8jLTeeeP4FriUf4WZ7rHYJKUEl8eGlqzZcVX0kiIt37KQXdzz7Lx8++rPcmqWjAAAAAElFTkSuQmCC',
                  'RangeProfile'
                ],
                [
                  'Google Maps',
                  `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.`,
                  'RangeProfile',
                  'data:image/png;base64,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',
                  'RangeProfile'
                ]
              ]}
              cardColor='#393B60'
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default JoinRange;
