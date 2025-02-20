def gradingStudents(grades):
    ans = []
    for g in grades:
        if g < 38:
            ans.append(g)
            continue
        
        remainder = g % 5
        if remainder >= 3:
            compliment = (5 - remainder) % 5
            new_grade = g + compliment
            ans.append(new_grade)
        else:
            ans.append(g)
            
    return ans