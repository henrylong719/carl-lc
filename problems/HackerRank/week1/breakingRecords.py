def breakingRecords(scores):
    min_score = max_score = scores[0]
    min_count = max_count = 0
    
    for score in scores[1:]:
        
        if score > max_score:
            max_count += 1
            max_score = score
        
        elif score < min_score:
            min_count += 1
            min_score = score
        
    return [max_count, min_count]  